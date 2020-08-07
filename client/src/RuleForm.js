import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import RuleTitleField from "./RuleTitleField";
import RuleDescriptionField from "./RuleDescriptionField";
import { loadRules } from "./actions/rules-actions";
import isObjectEmpty from "./utils/isObjectEmpty";
import { addRule, updateRule } from "./actions/rules-actions";

const RuleForm = ({ match, history }) => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadRules());
    // eslint-disable-next-line
  }, []);

  const rules = useSelector(state => state.rules);
  const matchID = Number(match.params.id);
  const rule = rules.find(rule => rule.id === matchID);
  const { id = undefined, title = "", description = "" } = rule || {};
  const initialValues = { id, title, description };
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .max(50, "The title must be shorter than 50 characters")
      .required("Title is required"),
    description: Yup.string()
      .min(5, "The description must be longer than 5 characters")
      .max(100, "The description must be shorter than 100 characters")
  });

  const handleSubmit = values => {
    const submitActionCreator = id ? updateRule : addRule;
    dispatch(submitActionCreator(values, history));
  };

  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">{id ? "Edit rule" : "New rule"}</h3>
      </div>
      <div className="panel-body">
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ errors, dirty, isSubmitting }) => (
              <Form>
                <Field name="title" component={RuleTitleField} />
                <Field name="description" component={RuleDescriptionField} />
                <button
                  type="submit"
                  className="btn btn-primary pull-right"
                  disabled={isSubmitting || !isObjectEmpty(errors) || !dirty}
                >
                  Submit
                </button>
              </Form>
            )
          }
        </Formik>
      </div>
    </div>
  );
};

export default RuleForm;