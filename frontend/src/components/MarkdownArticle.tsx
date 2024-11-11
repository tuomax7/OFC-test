import { marked } from 'marked';
import '../styles/Markdown.css';

const MarkdownArticle = ({ markdown }: { markdown: string }) => {
  const htmlContent = marked(markdown);

  return (
    <article
      className='flex flex-col items-center justify-center text-center'
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    ></article>
  );
};

export default MarkdownArticle;
