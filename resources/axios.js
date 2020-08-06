/**
 * Mock superagent library.
 */

export default {
  get: jest.fn().mockReturnThis(),
  post: jest.fn().mockReturnThis(),
  put: jest.fn().mockReturnThis(),
  set: jest.fn().mockReturnThis(),
  query: jest.fn().mockReturnThis(),
  end: jest.fn().mockReturnThis()
}
