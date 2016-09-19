# Clappr VAST Ads

## Usage

Add both Clappr and VAST ads plugin scripts to your HTML:

```html
<head>
  <script type="text/javascript" src="http://cdn.clappr.io/latest/clappr.min.js"></script>
  <script type="text/javascript" src="dist/vast-ads.js"></script>
</head>
```

Then just add `VastAds` into the list of plugins of your player instance and specify VAST XML url:

```javascript
var player = new Clappr.Player({
  source: "http://your.video/here.m3u8",
  plugins: {
    'core': [VastAds]
  },
  VastAdsConfig: {
    AdXMLUrl: 'http://path/to/vast.xml'
  }
});
```

## Compatibility

VAST 3.0 and 2.0
