var isString = require('lodash/isString');
var isArray = require('lodash/isArray');
var split = require('lodash/split');
var reduce = require('lodash/reduce');

export function setupClass (params) {
  if (isString(params) || isArray(params)) {
    params = isString(params) ? split(params, ' ') : params;
    return reduce(params, (obj, input) => ({ ...obj, [input]: true }), {});
  }
  return params;
}

export default {
  methods: {
    setupClass,
  }
};