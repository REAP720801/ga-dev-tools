// Copyright 2016 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


import 'babel-polyfill';
import svg4everybody from 'svg4everybody/dist/svg4everybody';

import analytics from './analytics';
import header from './header';
import highlighter from './highlighter';
import sidebar from './sidebar';


// Polyfills SVG support in all browsers.
svg4everybody();

// Initiaze the header functionality.
header.init();

// Initiaze the sidebar functionality.
sidebar.init();

// Highlight code blocks.
highlighter.highlight('pre');

// Setup Google Analytics tracking.
analytics.track();
