import { object, string } from "prop-types";
import Helmet from "react-helmet";
import React from "react";

// import { ogcover } from "assets/images";
// import { favicon } from "assets/icons";
import { TAG } from "config/meta";

const CustomHelmet = props => {
  const { location, title } = props;
  return (
    <Helmet
      defaultTitle={TAG.defaultTitle}
      titleTemplate="%s ⋅ Bad Idea Factory"
    >
      <html lang="en" />
      <meta name="charset" content="utf-8" />
      <meta name="description" content={TAG.description} />
      <meta name="keywords" content={TAG.keywords} />
      <meta name="language" content="en" />
      <meta name="title" content={title || TAG.defaultTitle} />
      <meta
        name="viewport"
        content="width=device-width, minimum-scale = 1.0, initial-scale = 1.0, maximum-scale = 5.0, user-scalable=yes, shrink-to-fit=no"
      />

      <title>{title}</title>

      {/* <link rel="icon" type="image/x-icon" href={favicon} /> */}
      <link rel="canonical" href={`${TAG.url}${location.pathname}`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={TAG.twitterHandle} />

      {/* Facebook Open Graph */}
      {/* <meta property="og:image" content={ogcover} /> */}
      {/* <meta property="og:image:secure_url" content={ogcover} /> */}
      <meta property="og:locale" content="en" />
      <meta property="og:site_name" content={TAG.siteName} />
      <meta property="og:title" content={TAG.defaultTitle} />
      <meta property="og:description" content={TAG.description} />
      <meta property="og:url" content={`${TAG.url}${location.pathname}`} />
    </Helmet>
  );
};

CustomHelmet.propTypes = {
  location: object.isRequired,
  title: string.isRequired
};

CustomHelmet.defaultProps = {};

export default CustomHelmet;
