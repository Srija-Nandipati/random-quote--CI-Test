import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  PocketIcon,
  PocketShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TumblrIcon,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";

export const Social = ({ quote }) => {
  return (
    <div className="flex-row">
      <FacebookShareButton title={quote} url={window.location.href}>
        <FacebookIcon size={24} round />
      </FacebookShareButton>

      <LinkedinShareButton title={quote} url={window.location.href}>
        <LinkedinIcon size={24} round />
      </LinkedinShareButton>

      <PinterestShareButton title={quote} url={window.location.href}>
        <PinterestIcon size={24} round />
      </PinterestShareButton>

      <PocketShareButton title={quote} url={window.location.href}>
        <PocketIcon size={24} round />
      </PocketShareButton>

      <RedditShareButton title={quote} url={window.location.href}>
        <RedditIcon size={24} round />
      </RedditShareButton>

      <WhatsappShareButton title={quote} url={window.location.href}>
        <WhatsappIcon size={24} round />
      </WhatsappShareButton>

      <TwitterShareButton title={quote} url={window.location.href}>
        <XIcon size={24} round />
      </TwitterShareButton>

      <TumblrShareButton title={quote} url={window.location.href}>
        <TumblrIcon size={24} round />
      </TumblrShareButton>

      <TelegramShareButton title={quote} url={window.location.href}>
        <TelegramIcon size={24} round />
      </TelegramShareButton>
    </div>
  );
};
