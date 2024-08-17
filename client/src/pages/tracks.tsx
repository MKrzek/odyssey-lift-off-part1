import React from 'react';
import { Layout } from '../components';
import {gql, useQuery} from '@apollo/client'
import TrackCard from '../containers/track-card';

const TRACKS = gql`
query GetTracks {
  tracksForHome {
    id
    title
    author {
      photo
      name
    }
    moduleCount
    length
    thumbnail
  }
}
`
const Tracks = () => {
  const {loading, error, data} = useQuery(TRACKS)

  if (loading) return 'Loading...'
  if(error) return `ERROR! ${error.message}`
  return <Layout fullWidth={100} grid> {data?.tracksForHome?.map(track=>{
    <TrackCard key={track.id} track={track}/>
  })}</Layout>;
};

export default Tracks;
