const smartgrid = require('smart-grid');

const settings = {
  filename: '_smartgrid',
  outputStyle: 'scss', /* less || scss || sass || styl */
  columns: 12, /* number of grid columns */
  offset: '30px', /* gutter width px || % */
  container: {
    maxWidth: '1200px', /* max-width оn very large screen */
    fields: '30px' /* side fields */
  },
  breakPoints: {
    lg: {
      width: "1170px",
      fields: "30px"
    },
    md: {
      width: "992px",
      fields: "30px"
    },
    sm: {
      width: "768px",
      fields: "15px"
    },
    xs: {
      width: "576px",
      fields: "15px"
    },
    xxs: {
      width: "380px",
      fields: "12.5px"
    }
  },
  properties: [],
  oldSizeStyle: false
};

smartgrid('./source/style/_misc', settings);
