formatted_address: action.data.formatted_address,
  formatted_phone_number: action.data.formatted_phone_number,
    reviews: action.data.reviews,
      open_close_timing: action.data.opening_hour,
        website: action.data.website


formatted_address: null,
  formatted_phone_number: null,
    reviews: [],
      open_close_timing: null,
        website: null,
          <ul>
            {props.loadedData.map((item, index) => {
              <li key={index}>{item}</li>
            })}
          </ul>
// {((this.props.isLoading && this.props.locationInfo[this.props.locationInfo.length - 1].data.place_id === this.props.data.place_id) && this.props.locationInfo.length) ? <Button onClick={this.loadDetails}>Show More</Button> : <PlaceDetails loadedData={this.props.locationInfo} />}
