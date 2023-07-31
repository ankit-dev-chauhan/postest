import ReactQuill from 'react-quill';

export default function Test() {

    return (<div> <ReactQuill theme="snow" placeholder="Write description" /></div>)

}
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// function QuilEditor() {
//   const [text, setText] = React.useState('');

//   function handleQuillChange(value) {
//     setText(value);
//   }

//   return (
//     <div>
//       <ReactQuill value={text} onChange={handleQuillChange} />
//     </div>
//   );
// }
// export default QuilEditor;