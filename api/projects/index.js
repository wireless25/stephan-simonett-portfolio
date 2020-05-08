import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import marked from 'marked';

module.exports = (req, res) => {
  const posts = getAllProjects();
  res.json(posts);
};

const getAllProjects = () =>
  fs.readdirSync('api/projects/_data').map((fileName) => {
    const post = fs.readFileSync(
      path.resolve('api/projects/_data', fileName),
      'utf-8'
    );

    // function that expose helpful callbacks
    // to manipulate the data before convert it into html
    const renderer = new marked.Renderer();

    // use hljs to highlight our blocks codes
    renderer.heading = (text, level) => {
      const classes = (level) => {
        if (level === 1) {
          return `text-2xl text-blue-500`;
        }
        if (level === 2) {
          return `text-2xl text-blue-500`;
        }
        if (level === 3) {
          return `text-2xl text-blue-500`;
        }
      };

      return `<h${level} class="${classes(level)}">${text}</h${level}>`;
    };

    // parse the md to get front matter
    // and the content without escaping characters
    const { data, content } = grayMatter(post);
    const desc = marked(content, { renderer });

    return { ...data, desc };
  });
