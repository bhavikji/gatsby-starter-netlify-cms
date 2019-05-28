import React from "react";
import PropTypes from "prop-types";
import { BhavikjiPageTemplate } from "../../templates/bhavikji";

const BhavikjiPagePreview = ({ entry, widgetFor }) => (
  <BhavikjiPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

BhavikjiPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default BhavikjiPagePreview;
