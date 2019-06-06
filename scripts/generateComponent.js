#!/usr/bin/env node
const fs = require('fs');
const { resolve } = require('path');

const [,, componentPath, ...rest] = process.argv;

const componentName = componentPath.split('/').pop();

const flagArgs = rest
  .join(' ')
  .split('--')
  .reduce((flagArgMap, commandArgPair) => {
    const commandArgPairSplit = commandArgPair.split(' ');
    flagArgMap[commandArgPairSplit[0]] = commandArgPairSplit[1] || true;
    return flagArgMap;
  }, {});

const pathToComponent = `${__dirname}/../src/lib/${componentPath}`;

if (fs.existsSync(pathToComponent)) {
  throw new Error('Component already exists. Exiting');
}

fs.mkdirSync(pathToComponent, { recursive: true });

// Write index file
fs.writeFileSync(`${pathToComponent}/index.js`, `export { default } from './${componentName}';\n`);

// Write doc file
fs.writeFileSync(`${pathToComponent}/${componentName}.md`, '');

// Write css file
fs.writeFileSync(`${pathToComponent}/${componentName}.css`, `.${componentName} {

}
`);

// Write jsx file
const { type } = flagArgs;
const imports = `import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
${type === 'function' ? '' : 'import autoBind from \'react-autobind\';\n'}
import './${componentName}.css';
`;

let jsFile;
if (type === 'function') {
  jsFile = `${imports}
const ${componentName} = (props) => {
  return <div />;
}

${componentName}.propTypes = {

};

${componentName}.defaultProps = {

};

export default ${componentName};
`
} else {
  jsFile = `${imports}
class ${componentName} extends React.Component {
  static propTypes = {

  };

  static defaultProps = {

  };

  render() {
    return <div />;
  }
}
export default ${componentName};
`
}

fs.writeFileSync(`${pathToComponent}/${componentName}.jsx`, jsFile);

// Write test file
const testFile = `import React from 'react';
import { mount } from 'enzyme';
import ${componentName} from './${componentName}';

// This is not a good enough test
// Replace it with real tests
it('renders', () => {
  const componentWrapper = mount(<${componentName} />);
  componentWrapper.unmount();
});
`
fs.writeFileSync(`${pathToComponent}/${componentName}.test.jsx`, testFile);

console.log(`Setup a ${type || 'class'} style component in ${resolve(pathToComponent)}\n`);
console.log('Wrote the following files:');
console.log('Re-export file: index.js');
console.log(`Component file: ${componentName}.jsx`);
console.log(`Style file: ${componentName}.css`);
console.log(`Test file: ${componentName}.test.jsx`);
console.log(`Documentation file: ${componentName}.md`);
