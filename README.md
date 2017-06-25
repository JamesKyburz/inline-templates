# This repository is no longer maintained.

[![Greenkeeper badge](https://badges.greenkeeper.io/JamesKyburz/inline-templates.svg)](https://greenkeeper.io/)
inline-templates adds a helper function called templates for your layout
file.

``` javascript
templates([options={type: 'text/x-template', template_path:
'./templates/'}]);
```

## Example

app.js
``` javascript
  require('inline-templates');
```

layout.jade
``` slim
  !=templates({type:'text/x-serenade'});
```

Install it via npm:

```
npm install inline-templates
```

