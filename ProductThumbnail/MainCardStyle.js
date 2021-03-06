import { Color } from 'common';
export default {
  container: {
    minHeight: 150,
    width: '100%',
    marginVertical: 10,
 
    // box-shadow
    backgroundColor: Color.white,
    borderRadius: 5,
    borderColor: '#ddd',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
  },
  promoContainer: {
    position: 'absolute',
    top: 10,
    left: 0,
    zIndex: 10,
  },
  promoView: {
    alignSelf: 'flex-start',
    backgroundColor: Color.primary,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginBottom: 4,
  },
  promoText: {
    color: Color.white,
    fontSize: 13,
    fontWeight: '500'
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
  },
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: '100%',
    height: 150
  },
  videoIndicator: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 10,
    right: 10,
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(255,255,255,0.8)',
  },
  playIcon: {
    color: Color.white
  },
  videoIndicatorText: {
    color: Color.white,
    marginLeft: 5,
    textAlign: 'center',
    fontWeight: '600'
  },
  details: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  leftSide: {
    width: '80%',
    flexDirection: 'column'
  },
  rightSide: {
    width: '20%',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 20
  },
  tags: {
    color: Color.darkGray,
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 20
  },
  ratings: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starRatings: {
    color: Color.goldenYellow,
  },
  textRatings: {
    color: Color.darkGray,
    marginLeft: 3,
    fontWeight: '600'
  },
  totalRatings: {
    color: Color.darkGray,
    marginTop: 3,
    fontSize: 10
  },
  deliveryTime: {
    marginTop: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    color: Color.darkGray,
    marginLeft: 3,
    fontWeight: '600',
    fontSize: 13
  },
  circleDivider: {
    marginHorizontal: 4
  },
  distanceText: {
    color: Color.darkGray,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 13
  }
}