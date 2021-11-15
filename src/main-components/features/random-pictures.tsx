import * as React from 'react';
import axios from 'axios';
import {createClient} from 'pexels';

const KEY = '563492ad6f91700001000001d1819d89e8bb428e969d1e5aafe6643b';
const client = createClient(KEY);

client.photos.show({id:2014422}).then(photo => console.log(photo));