import {makeStyles} from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '10%',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '6%',
    left: '5%',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '6%',
    right: '5%',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '6%',
  },
  title: {
    padding: '0 5%',
  },
  cardActions: {
    padding: '0 5% 4% 5%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  description: {
    marginBottom: '3%',
    fontSize: "105%"
  }
});