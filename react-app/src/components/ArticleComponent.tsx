import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function ArticleComponent() {

    const [content, setContent] = useState('')

    useEffect(() => {
        fetch("markdown_example.md")
          .then((res) => res.text())
          .then((text) => setContent(text));
      }, []);

    return (
        <div className="post">
            <ReactMarkdown className="prose" remarkPlugins={[remarkGfm]} children={content} />
        </div>
    );
}

// continue from here https://stackoverflow.com/questions/42928530/how-do-i-load-a-markdown-file-into-a-react-component