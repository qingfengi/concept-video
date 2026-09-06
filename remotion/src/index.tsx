import React from 'react';
import {Composition, registerRoot} from 'remotion';
import {TokenNumbering} from './TokenNumbering';
import {FullEP01} from './FullEP01';

const Root: React.FC = () => (
  <>
    <Composition id="TokenNumbering" component={TokenNumbering} durationInFrames={75} fps={25} width={1920} height={1080} />
    <Composition id="FullEP01" component={FullEP01} durationInFrames={750} fps={25} width={1920} height={1080} />
  </>
);

registerRoot(Root);
