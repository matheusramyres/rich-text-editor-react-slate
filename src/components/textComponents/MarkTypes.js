import React from 'react';
import {Transforms, Text, Node} from 'slate';
function HotKeys (event, Editor, editor){
    if(!event.ctrlKey){return}
                switch(event.key){
                    case '/': {
                        event.preventDefault();
                        const [match] = Editor.nodes(editor, {
                          match: n => n.type === 'code',
                        })
                        Transforms.setNodes(
                          editor,
                          { type: match ? 'paragraph' : 'code' },
                          { match: n => Editor.isBlock(editor, n) }
                        )
                          return
                    }
                    case 'b': {
                        event.preventDefault();
                        Transforms.setNodes(
                          editor,
                          { bold: true },
                          { match: n => Text.isText(n), split: true }
                        );
                        return

                      }
                      case 'm': {
                        event.preventDefault();
                        Transforms.setNodes(
                          editor,
                          { 
                            bold: false,
                            italic:false 
                          },
                          { match: n => Text.isText(n), split: true }
                        );
                        return

                      }
                      case 'i': {
                        event.preventDefault();
                        Transforms.setNodes(
                          editor,
                          { italic: true },
                          { match: n => Text.isText(n), split: true }
                        );
                        return

                      }
                }
    
}


function BoldButton(event, Editor, editor) {
  event.preventDefault();
  Transforms.setNodes(
    editor,
    { bold: true },
    { match: n => Text.isText(n), split: true }
  );
  return
}

function CodeButton(event, Editor, editor) {
  event.preventDefault();
  const [match] = Editor.nodes(editor, {
    match: n => n.type === 'code',
  })
  Transforms.setNodes(
    editor,
    { type: match ? 'paragraph' : 'code' },
    { match: n => Editor.isBlock(editor, n) }
  )
  return
}

function ItalicButton(event, Editor, editor) {
  event.preventDefault();
  Transforms.setNodes(
    editor,
    { italic: true },
    { match: n => Text.isText(n), split: true }
  );
  return
}

function LinkButton(event, Editor, editor) {
  event.preventDefault();
  Transforms.setNodes(
    editor,
    { link: true },
    { match: n => Text.isText(n), split: true }
  );
  return
}


export{HotKeys, BoldButton, ItalicButton, CodeButton, LinkButton};
