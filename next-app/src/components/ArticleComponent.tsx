'use client';

import { 
    // useState, 
    // useEffect, 
    ReactElement } from 'react'
// import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'

export default function ArticleComponent(): ReactElement {

    // const [content, setContent] = useState('')

    // useEffect(() => {
    //     fetch("markdown_example.md")
    //       .then((res) => res.text())
    //       .then((text) => setContent(text));
    //   }, []);

    // NextJS build was giving error, since this component isn't used yet just commented 
    // it out for now
    return (
        <div className="post">
            <p>Under construction</p>
            {/* <ReactMarkdown className="prose" remarkPlugins={[remarkGfm]} children={content} /> */}
        </div>
    );
}

// continue from here https://stackoverflow.com/questions/42928530/how-do-i-load-a-markdown-file-into-a-react-component