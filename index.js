var numeral = require('numeral');

function parse(value) {
  return numeral(value).value();
}

function format(value, format) {
  return numeral(value).format(format);
}

module.exports = {
  parse: parse,
  format: format
};
