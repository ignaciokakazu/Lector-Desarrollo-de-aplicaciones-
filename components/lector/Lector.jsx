import * as React from 'react';

import { SafeAreaView, useWindowDimensions } from 'react-native';
import { Reader, ReaderProvider } from '@epubjs-react-native/core';
// import { useFileSystem } from '@epubjs-react-native/file-system'; // for Bare React Native project
import { useFileSystem } from '@epubjs-react-native/expo-file-system'; // for Expo project
import { useEffect, useState } from 'react';

export default function Lector({route}) {
  const { width, height } = useWindowDimensions();
  const [srcState, setSrcState] = useState('');
  const {id, src} = route.params;

  useEffect(()=> {
    console.log(id)
    console.log(src)
    //buscar src por id
    // setSrcState('https://s3.amazonaws.com/moby-dick/OPS/package.opf')
    //y lo agrega en PaginaLeidos
  }, [])

  return (
    <SafeAreaView>
      <ReaderProvider>
        <Reader
          src={src}
          width={width}
          height={height}
          fileSystem={useFileSystem}
        />
      </ReaderProvider>
    </SafeAreaView>
  );
}
