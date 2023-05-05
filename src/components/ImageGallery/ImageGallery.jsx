import css from './ImageGallery.module.css';
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
const { Component } = require("react");

class ImageGallrey extends Component {
    render() {
                return (
                        <ul className={css.imageGallery}>
                        {this.props.pictures.hits &&
                            this.props.pictures.hits.map((i) => (
                                <ImageGalleryItem
                                    key={i.id}
                                    src={i.webformatURL}
                                    href={i.largeImageURL}
                                    alt={i.tags}
                                    onOpen={this.props.onOpen}
                                />
                            ))}
                        </ul>
                );
            }
        }

export default ImageGallrey;

ImageGallrey.propTypes = {

    pictures: PropTypes.array.isRequired,
};