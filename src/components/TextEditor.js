import React, {useState, useMemo, useCallback} from 'react';
import {isMarkActive, toggleMark, isBlockActive, toggleBlock} from '../utils/utils';

import {Slate, Editable, withReact} from 'slate-react';
import {Editor, createEditor} from 'slate';

import Element from './textComponents/Element';
import Leaf from './textComponents/Leaf';
import {Button} from './toolbarComponents/Button';

import FormatToolbar from './toolbarComponents/FormatToolbar';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import FormatBold from '@material-ui/icons/FormatBold';
import FormatItalic from '@material-ui/icons/FormatItalic';
import FormatUnderlined from '@material-ui/icons/FormatUnderlined';
import Code from '@material-ui/icons/Code';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
import FormatListNumbered from '@material-ui/icons/FormatListNumbered';
import LooksOneRounded from '@material-ui/icons/LooksOneRounded';
import LooksTwoRounded from '@material-ui/icons/LooksTwoRounded';

import {HotKeys} from './textComponents/MarkTypes';
import { withHistory } from 'slate-history';


export default function TextEditor(){
    
    const [value, setValue] = useState(initialValue);
    const editor = useMemo(() => withHistory(withReact(createEditor())), []);

    const renderElement = useCallback(props => <Element {...props} />, []);

      const renderLeaf = useCallback(props => {
        return <Leaf {...props} />
      }, [])



    return (
        <>
          <FormatToolbar>

            <Button
              active={isMarkActive(editor, 'bold')}
              onMouseDown={event => {
                event.preventDefault()
                toggleMark(editor, 'bold')
              }}
            >
              <FormatBold/>
            </Button>

            {/* Italic button */}
            <Button
              active={isMarkActive(editor, 'italic')}
              onMouseDown={event => {
                event.preventDefault()
                toggleMark(editor, 'italic')
              }}
            >
              <FormatItalic/>
            </Button>

            {/* Code button */}
            <Button
              active={isMarkActive(editor, 'code')}
              onMouseDown={event => {
                event.preventDefault()
                toggleMark(editor, 'code')
              }}
            >
              <Code/>
            </Button>
            
            {/* Underline button */}
            <Button
              active={isMarkActive(editor, 'underline')}
              onMouseDown={event => {
                event.preventDefault()
                toggleMark(editor, 'underline')
              }}
            >
            <FormatUnderlined/>
            </Button>

            {/* H1 button */}
            <Button
              active={isBlockActive(editor,'heading-one')}
              onMouseDown={event => {
                event.preventDefault()
                toggleBlock(editor, 'heading-one')
              }}
            >
              <LooksOneRounded/>
            </Button>
            
            {/* H2 button */}
            <Button
              active={isBlockActive(editor,'heading-two')}
              onMouseDown={event => {
                event.preventDefault()
                toggleBlock(editor, 'heading-two')
              }}
            >
              <LooksTwoRounded/>
            </Button>

            {/* Bullet-list button */}
            <Button
              active={isBlockActive(editor, 'bulleted-list')}
              onMouseDown={event => {
                event.preventDefault()
                toggleBlock(editor, 'bulleted-list')
              }}
            >
              <FormatListBulleted/>
            </Button>

            {/* Number-list button */}
            <Button
              active={isBlockActive(editor, 'numbered-list')}
              onMouseDown={event => {
                event.preventDefault()
                toggleBlock(editor, 'numbered-list')
              }}
            >
              <FormatListNumbered/>
            </Button>

            {/* Quote button */}
            <Button
              active={isBlockActive(editor,'block-quote')}
              onMouseDown={event => {
                event.preventDefault()
                toggleBlock(editor, 'block-quote')
              }}
            >
              <FormatQuoteIcon/>
            </Button>
            
          
          </FormatToolbar>

          <Slate value={value} editor={editor} onChange={value => setValue(value)}>
            <Editable 
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            onKeyDown={event => {
                HotKeys(event, Editor, editor);

            }}/>
          </Slate>

        </>
    );
}

const initialValue = [
  {
    type: 'paragraph',
    children: [
      { text: 'Digite seu texto aqui... ' },
     
    ],
  }
]
