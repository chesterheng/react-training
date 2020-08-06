/**
 * Rules API.
 * GET /rest/rules
 * GET /rest/rules/:id
 * POST /rest/rules
 * PUT /rest/rules/:id
 * POST /rest/rules/:id/likes
 * POST /rest/rules/:id/dislikes
 */

const _ = require('lodash');
const rules = require('./rules');

function checkRule(rule) {
  const title = rule.title;
  const desc = rule.description;

  return !!title && title.length <= 50 &&
    (!desc || (desc.length >= 5 && desc.length <= 100));
}

module.exports = function rulesRouter(app) {
  let id = _.last(rules).id;

  app.get('/rest/rules', (req, res) => {
    console.info('GET /rest/rules');
    return res.status(200).json(rules);
  });

  app.get('/rest/rules/:id', (req, res) => {
    console.info(`GET /rest/rules/${req.params.id}`);

    const paramId = Number(req.params.id);
    const rule = _.find(rules, r => r.id === paramId);

    if (!rule) {
      return res.status(404).send();
    }
    return res.status(200).json(rule);
  });

  app.post('/rest/rules', (req, res) => {
    console.info('POST /rest/rules');
    console.info('  => body: ', req.body);

    let body = req.body;

    if (!body || _.has(body, 'id') || !checkRule(body)) {
      return res.status(400).send();
    }

    id += 1;
    body.id = id;
    body = _.defaults(body, {
      likes: 0,
      dislikes: 0,
      tags: [],
    });

    rules.push(body);

    return res.status(201).json(body);
  });

  app.put('/rest/rules/:id', (req, res) => {
    console.info(`PUT /rest/rules/${req.params.id}`);
    console.info('  => body: ', req.body);

    const body = req.body;

    if (!body || !checkRule(body)) {
      return res.status(400).send();
    }

    const paramId = Number(req.params.id);
    let rule = _.find(rules, r => r.id === paramId);

    if (rule) {
      _.extend(rule, body);
    } else {
      rule = body;
      rule.id = paramId;
    }

    return res.status(200).json(rule);
  });

  app.post('/rest/rules/:id/likes', (req, res) => {
    console.info(`POST /rest/rules/${req.params.id}/likes`);

    const paramId = Number(req.params.id);
    const rule = _.find(rules, r => r.id === paramId);

    if (!rule) {
      res.status(404).send();
    }

    rule.likes += 1;
    res.status(200).json(rule);
  });

  app.post('/rest/rules/:id/dislikes', (req, res) => {
    console.info(`POST /rest/rules/${req.params.id}/dislikes`);

    const paramId = Number(req.params.id);
    const rule = _.find(rules, r => r.id === paramId);

    if (!rule) {
      res.status(404).send();
    }

    rule.dislikes += 1;
    res.status(200).json(rule);
  });
};
