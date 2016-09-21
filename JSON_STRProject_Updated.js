//start with a prompt asking if they want a pre-made creative or custom
/* create an if/then function that goes through the questions depending on the answers
add those to an object
*/
var jSon = {"creatives": [{
    "creative": {
        "advertiser_key": "",
        "force_click_to_play": false,
        "creative_key": "sam-6d9ace29",
        "campaign_key": "a1aca5e80f272d9a9be1b810",
        "description": "This is your ad's description.  It can be longer than the title.",
        "media_url": "http://sharethrough.com",
        "custom_engagement_action": "",
        "instant_play_mobile_count": null,
        "share_url": "http://sharethrough.com",
        "variant_key": "124493",
        "instant_play_mobile_url": null,
        "advertiser": "Your Advertiser",
        "beacons": {
            "visible": [],
            "play": [],
            "completed_silent_play": [],
            "thirty_second_silent_play": [],
            "silent_play": [],
            "fifteen_second_silent_play": [],
            "click": [],
            "ten_second_silent_play": [],
            "impression": []
        },
        "custom_engagement_url": "",
        "thumbnail_url": "http://str-assets.imgix.net/m/creative_thumbnails/68965/images/original/time-square.jpg",
        "brand_logo_url": "//static.sharethrough.com/sam/campaigns/8496/brand_logos/mobile/sharethrough-mark.png",
        "source_id": "sam",
        "title": "This is your ad's Title.",
        "custom_engagement_label": "",
        "action": "clickout"
    },
    "auctionWinId": "fe5f9c1c-8d55-4d46-a29c-c552d6516ae3",
    "version": 1
}],
"adserverRequestId": "51dd0430-e351-46e0-b86d-d29d26f1a954"
};




var typeOfCreative;
var characterLength;
var contentType;
var promotedBy;
var customHeadline;
var customDescription;
var customThumbnail;
var premadeCreative = {};
var customCreative = {};

var creative = function(){
	typeOfCreative = prompt("Will this be a pre-made or custom creative?");
	if(typeOfCreative === "pre-made") {
		characterLength = prompt("What is the max character count for headlines? (40, 90, or 140)")
		contentType = prompt("Which type of creative would you like to preview? (Website Visit Ad, Content Engagement Ad or Video View Ad?");
		premadeCreative.characterLength = characterLength;
		premadeCreative.contentType = contentType;
	} 
	else{
		promotedBy = prompt("Awesome! What would you like the 'Promoted By' section to read? Default: 'Promoted By'");
        customHeadline = prompt("What would you like the headline to read? (140 characters max)");
        customDescription = prompt("What would you like the description to read? (180 characters max)");
        customThumbnail = prompt("Please share a URL for your thumbnail image");
        customCreative.promotedBy = promotedBy;
        customCreative.customHeadline = customHeadline;
        customCreative.customDescription = customDescription;
        customCreative.customThumbnail = customThumbnail;
	}
};


jSon.newPremadeCreative = premadeCreative;
jSon.newCustomCreative = customCreative;

var newJsonParse = JSON.stringify(jSon);


creative();

console.log(customCreative);



