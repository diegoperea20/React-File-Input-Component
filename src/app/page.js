"use client";
import { useRef, useState } from 'react';
import InputFile from '@/components/InputFile';
import Link from 'next/link';

function Page() {
  const codeRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeRef.current.innerText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Cambia de nuevo a 'Copiar' después de 2 segundos
    }, (err) => {
      console.error('Error al copiar el código: ', err);
    });
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>React File Input Component</h2>
      <h4>Dark Mode Default</h4>
      <InputFile /> {/* theme dark for default */}
      <h4>Clear Mode</h4>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <button
          onClick={handleCopy}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            padding: '4px 8px',
            fontSize: '12px',
            cursor: 'pointer',
            backgroundColor: copied ? '#4caf50' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '3px'
          }}
        >
          {copied ? '✔' : 'Copy'}
        </button>
        <pre>
          <code ref={codeRef}>
            {`<InputFile theme="clear" />`}
          </code>
        </pre>
      </div>
      <InputFile theme="clear" /> {/* theme clear */}
      <div className="project-github">
        <p>This project is in </p>
        <Link href="https://github.com/diegoperea20/React-File-Input-Component">
          <img width="96" height="96" src="https://img.icons8.com/fluency/96/github.png" alt="github"/>
        </Link>
      </div>
     
    </div>
  );
}

export default Page;
