import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function ArticleComponent() {
    const markdown = `Just a link: www.nasa.gov.`;

    return (
        <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
    );
}

// continue from here https://stackoverflow.com/questions/42928530/how-do-i-load-a-markdown-file-into-a-react-component