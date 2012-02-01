var fs, glob, _;
glob = require('glob');
fs = require('fs');
_ = require('underscore');
global.templates = function(options) {
  var files, templates;
  if (options == null) {
    options = {};
  }
  options = _.extend({
    template_path: './templates/',
    type: 'text/x-template'
  }, options);
  files = glob.sync("" + options.template_path + "/**/*.*");
  templates = _.reduce(files, function(result, fn) {
    var id;
    id = fn.replace(options.template_path, '')
           .replace(/\//g, '-')
           .split('.')[0];
    result.push("<script id=\"" + id + "\" type=\"" + options.type + "\">\n" + (fs.readFileSync(fn)) + "\n</script>");
    return result;
  }, []);
  return templates.join("\n");
};
