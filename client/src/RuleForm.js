import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import RuleTitleField from "./RuleTitleField";
import RuleDescriptionField from "./RuleDescriptionField";
import { loadRules } from "./actions/rules-actions";

const RuleForm = ({ match }) => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadRules());
    // eslint-disable-next-line
  }, []);

  const rules = useSelector(state => state.rules);
  const id = Number(match.params.id);
  const rule = rules.find(rule => rule.id === id);
  const { title = "", description = "" } = rule || {};
  const initialValues = { id, title, description };
  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">{id ? "Edit rule" : "New rule"}</h3>
      </div>
      <div className="panel-body">
        <Formik
          onSubmit={values => console.log(values)}
          initialValues={initialValues}
        >
          {props => {
            console.log(props);
            return (
              <Form>
                <Field name="title" component={RuleTitleField} />
                <Field name="description" component={RuleDescriptionField} />
                <button type="submit" className="btn btn-primary pull-right">
                  Submit
                </button>
              </Form>
            )
          }}
        </Formik>
      </div>
    </div>
  );
};

export default RuleForm;