module.exports = {
  id: "HopeContact",
  thumbnailWidth: 680,
  thumbnailHeight: 1779,
  title: "Contact",
  keywords: "contact, location, address, hope, NGO, charity, Non Profit",
  cat: [0, 12],
  pro: true,
  resolve: {
    blocks: [
      {
        type: "Section",
        value: {
          _styles: ["section"],
          items: [
            {
              type: "SectionItem",
              value: {
                _styles: ["section-item"],
                items: [
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--richText"],
                      items: [
                        {
                          type: "RichText",
                          value: {
                            _styles: ["richText"],
                            text:
                              '<h1 class="brz-text-xs-center brz-tp-heading1 brz-text-lg-center"><span class="brz-cp-color8">Get in Touch</span></h1>'
                          }
                        }
                      ],
                      animationName: "fadeIn",
                      tempAnimationName: "fadeIn",
                      animationDelay: 0
                    }
                  }
                ],
                paddingType: "ungrouped",
                paddingTop: 190,
                paddingBottom: 190,
                padding: 75,
                bgImageWidth: 1920,
                bgImageHeight: 600,
                bgImageSrc: "82c979cc5b7f37a33ed9a9bb3d481d9b.jpg",
                bgPositionX: 50,
                bgPositionY: 50,
                bgColorOpacity: 0.1000000000000000055511151231257827021181583404541015625,
                tempBgColorOpacity: 0.1000000000000000055511151231257827021181583404541015625,
                tempMobileBgColorOpacity: 1,
                bgColorPalette: "color2",
                bgColorHex: "#141414",
                bgPopulation: ""
              }
            }
          ]
        },
        blockId: "Blank000Light"
      },
      {
        type: "Section",
        value: {
          _styles: ["section"],
          items: [
            {
              type: "SectionItem",
              value: {
                _styles: ["section-item"],
                items: [
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--iconText"],
                      items: [
                        {
                          type: "Form",
                          value: {
                            _styles: ["form"],
                            items: [
                              {
                                type: "FormFields",
                                value: {
                                  items: [
                                    {
                                      type: "FormField",
                                      value: {
                                        type: "Text",
                                        label: "FIRST NAME",
                                        required: "off",
                                        options: ["Option 1", "Option 2"],
                                        width: 50
                                      }
                                    },
                                    {
                                      type: "FormField",
                                      value: {
                                        type: "Text",
                                        label: "LAST NAME",
                                        required: "off",
                                        options: ["Option 1", "Option 2"],
                                        width: 50
                                      }
                                    },
                                    {
                                      type: "FormField",
                                      value: {
                                        type: "Email",
                                        label: "EMAIL",
                                        required: "off",
                                        options: ["Option 1", "Option 2"],
                                        width: 50
                                      }
                                    },
                                    {
                                      type: "FormField",
                                      value: {
                                        type: "Number",
                                        label: "PHONE NO",
                                        required: "off",
                                        options: ["Option 1", "Option 2"],
                                        width: 50
                                      }
                                    },
                                    {
                                      type: "FormField",
                                      value: {
                                        type: "Paragraph",
                                        label: "MESSAGE",
                                        required: "off",
                                        options: ["Option 1", "Option 2"]
                                      }
                                    }
                                  ],
                                  fontStyle: "paragraph",
                                  mobileFontStyle: "",
                                  borderColorPalette: "color3",
                                  bgColorHex: "#ffffff",
                                  bgColorOpacity: 0,
                                  bgColorPalette: "",
                                  colorPalette: "color8",
                                  colorHex: "#ffffff",
                                  colorOpacity: 1,
                                  padding: 20,
                                  paddingRight: 20,
                                  paddingBottom: 20,
                                  paddingLeft: 20
                                }
                              },
                              {
                                type: "Button",
                                value: {
                                  _styles: ["button", "submit"],
                                  iconName: "",
                                  iconType: "",
                                  text: "SEND MESSAGE",
                                  fillType: "filled",
                                  tempFillType: "filled",
                                  paddingRL: 42,
                                  paddingRight: 42,
                                  paddingLeft: 42,
                                  paddingTB: 14,
                                  paddingTop: 14,
                                  paddingBottom: 14,
                                  borderRadiusType: "custom",
                                  borderRadius: 30,
                                  borderWidth: 0,
                                  borderColorOpacity: 0,
                                  borderColorPalette: 0,
                                  bgColorOpacity: 1,
                                  bgColorPalette: "color3",
                                  hoverBgColorOpacity: 1,
                                  hoverBorderColorOpacity: 0,
                                  mobilePaddingRL: 26,
                                  mobilePaddingRight: 26,
                                  mobilePaddingLeft: 26,
                                  tempBorderRadiusType: "custom",
                                  mobileBorderRadius: 24,
                                  tempBorderWidth: 2,
                                  hoverBgColorPalette: "color8",
                                  hoverBorderColorPalette: "",
                                  tempHoverBorderColorPalette: "",
                                  hoverBgColorHex: "#141414",
                                  tempHoverBgColorOpacity: 1,
                                  tempHoverBgColorPalette: "color3",
                                  hoverBorderColorHex: "#141414",
                                  hoverColorPalette: "color2",
                                  hoverColorOpacity: 1
                                }
                              }
                            ],
                            horizontalAlign: "center"
                          }
                        }
                      ]
                    }
                  }
                ],
                paddingType: "ungrouped",
                paddingTop: 130,
                paddingBottom: 130,
                padding: 75,
                bgColorPalette: "color2",
                bgColorHex: "#141414",
                bgColorOpacity: 0,
                bgImageWidth: 1920,
                bgImageHeight: 700,
                bgImageSrc: "bf795eb241edbdb28f1b3c7b8e956b0c.jpg",
                bgPositionX: 50,
                bgPositionY: 50,
                tempBgColorOpacity: 0.90000000000000002220446049250313080847263336181640625,
                tempMobileBgColorOpacity: 0.90000000000000002220446049250313080847263336181640625,
                containerSize: 60
              }
            }
          ]
        },
        blockId: "Blank000Light"
      },
      {
        type: "Section",
        blockId: "Blank000Light",
        value: {
          _styles: ["section"],
          items: [
            {
              type: "SectionItem",
              value: {
                _styles: ["section-item"],
                items: [
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--richText"],
                      items: [
                        {
                          type: "RichText",
                          value: {
                            _styles: ["richText"],
                            text:
                              '<p class="brz-text-lg-center brz-tp-paragraph brz-text-xs-center"><span class="brz-cp-color8">SINCE 2003 THE HOPE FOUNDATION HAS RAISED</span></p>'
                          }
                        }
                      ]
                    }
                  },
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--spacer"],
                      items: [
                        {
                          type: "Spacer",
                          value: {
                            _styles: ["spacer"],
                            height: 20
                          }
                        }
                      ]
                    }
                  },
                  {
                    type: "Row",
                    value: {
                      _styles: ["row", "hide-row-borders", "padding-0"],
                      items: [
                        {
                          type: "Column",
                          value: {
                            _styles: ["column"],
                            items: [
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<p class="brz-text-lg-right brz-tp-abovetitle brz-text-xs-center"><span class="brz-cp-color8">$</span></p>'
                                      }
                                    }
                                  ],
                                  showOnMobile: "on",
                                  mobileMarginBottom: 0,
                                  mobileMarginBottomSuffix: "px",
                                  mobileMargin: 0,
                                  mobileMarginTop: 0,
                                  mobileMarginTopSuffix: "px"
                                }
                              }
                            ],
                            width: 36,
                            paddingType: "ungrouped",
                            padding: 0,
                            paddingSuffix: "px",
                            paddingTop: 0,
                            paddingRight: 5,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingRightSuffix: "px",
                            showOnMobile: "on",
                            mobileMarginBottom: 0,
                            mobileMarginBottomSuffix: "px",
                            mobileMargin: 0,
                            mobileMarginTop: 0,
                            mobileMarginTopSuffix: "px"
                          }
                        },
                        {
                          type: "Column",
                          value: {
                            _styles: ["column"],
                            items: [
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--counter"],
                                  items: [
                                    {
                                      type: "Counter",
                                      value: {
                                        _styles: ["counter"],
                                        end: "4748293",
                                        start: "4000000",
                                        duration: 2,
                                        fontStyle: "abovetitle",
                                        mobileFontStyle: "",
                                        colorPalette: "color8",
                                        colorOpacity: 1,
                                        hoverColorPalette: "color8",
                                        hoverColorOpacity: 1,
                                        hoverColorHex: "#ffffff"
                                      }
                                    }
                                  ],
                                  horizontalAlign: "left",
                                  mobileHorizontalAlign: "center",
                                  mobileMarginTop: 0,
                                  mobileMarginTopSuffix: "px",
                                  mobileMargin: 0,
                                  mobileMarginBottom: 0,
                                  mobileMarginBottomSuffix: "px"
                                }
                              }
                            ],
                            paddingType: "grouped",
                            padding: 0,
                            paddingSuffix: "px",
                            paddingTop: 0,
                            paddingRight: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            width: 64,
                            mobileMarginTop: 0,
                            mobileMarginTopSuffix: "px",
                            mobileMargin: 10
                          }
                        }
                      ]
                    }
                  },
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--spacer"],
                      items: [
                        {
                          type: "Spacer",
                          value: {
                            _styles: ["spacer"],
                            height: 20
                          }
                        }
                      ],
                      showOnMobile: "off"
                    }
                  },
                  {
                    type: "Cloneable",
                    value: {
                      _styles: ["wrapper-clone", "wrapper-clone--button"],
                      items: [
                        {
                          type: "Button",
                          value: {
                            _styles: ["button"],
                            text: "DONATE & MAKE A DIFFERENCE",
                            iconName: "",
                            iconType: "",
                            borderRadiusType: "custom",
                            tempBorderRadiusType: "custom",
                            paddingRight: 26,
                            paddingLeft: 26,
                            fillType: "filled",
                            borderRadius: 28,
                            borderWidth: 2,
                            borderColorOpacity: 1,
                            borderColorPalette: "color3",
                            bgColorOpacity: 1,
                            bgColorPalette: "color3",
                            hoverBgColorOpacity: 1,
                            hoverBorderColorOpacity: 0.8000000000000000444089209850062616169452667236328125,
                            mobileBorderRadius: 24,
                            size: "small",
                            mobileSize: "small",
                            fontSize: 11,
                            paddingTB: 11,
                            paddingTop: 11,
                            paddingBottom: 11,
                            tempPaddingTB: 11,
                            tempPaddingTop: 11,
                            tempPaddingBottom: 11,
                            paddingRL: 26,
                            tempPaddingRL: 26,
                            tempPaddingRight: 26,
                            tempPaddingLeft: 26,
                            mobilePaddingTop: 11,
                            mobilePaddingRight: 26,
                            mobilePaddingBottom: 11,
                            mobilePaddingLeft: 26,
                            tempBorderRadius: 28,
                            tempMobileBorderRadius: 28,
                            hoverBgColorPalette: "color5",
                            hoverBorderColorPalette: "color5",
                            tempHoverBorderColorPalette: "",
                            hoverBgColorHex: "#ffffff",
                            tempHoverBgColorOpacity: 1,
                            tempHoverBgColorPalette: "color3",
                            hoverBorderColorHex: "#ffffff",
                            hoverColorPalette: "color8",
                            hoverColorOpacity: 1,
                            linkExternalBlank: "off",
                            linkExternal:
                              "https://demo.themefuse.com/hope/?page_id=1956"
                          }
                        }
                      ],
                      mobileHorizontalAlign: "center"
                    }
                  }
                ],
                paddingType: "ungrouped",
                paddingTop: 120,
                paddingBottom: 110,
                padding: 75,
                bgImageWidth: 1920,
                bgImageHeight: 763,
                bgImageSrc: "820ef4b70e0fcb0fbac34683897521bd.jpg",
                bgPositionX: 50,
                bgPositionY: 50,
                bgColorOpacity: 0,
                tempBgColorOpacity: 1,
                tempMobileBgColorOpacity: 1
              }
            }
          ]
        }
      },
      {
        type: "Section",
        value: {
          _styles: ["section"],
          items: [
            {
              type: "SectionItem",
              value: {
                _styles: ["section-item"],
                items: [
                  {
                    type: "Row",
                    value: {
                      _styles: ["row", "hide-row-borders", "padding-0"],
                      items: [
                        {
                          type: "Column",
                          value: {
                            _styles: ["column"],
                            items: [
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--map"],
                                  items: [
                                    {
                                      type: "Map",
                                      value: {
                                        _styles: ["map"],
                                        height: 350,
                                        mobileHeight: 300
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--spacer"],
                                  items: [
                                    {
                                      type: "Spacer",
                                      value: {
                                        _styles: ["spacer"],
                                        height: 20
                                      }
                                    }
                                  ],
                                  showOnMobile: "off"
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<h4 class="brz-tp-heading4"><span class="brz-cp-color2">new york office</span></h4>'
                                      }
                                    }
                                  ],
                                  marginBottom: 0,
                                  marginBottomSuffix: "px",
                                  margin: 0
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<p class="brz-tp-paragraph"><span class="brz-cp-color3">Alice Williams</span></p>'
                                      }
                                    }
                                  ],
                                  marginTop: 0,
                                  marginTopSuffix: "px",
                                  margin: 0
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<p class="brz-tp-paragraph"><span class="brz-cp-color7">#1 Mapp Street</span></p><p class="brz-tp-paragraph"><span class="brz-cp-color7">hello@hope-foundation.org</span></p><p class="brz-tp-paragraph"><span class="brz-cp-color7">+1 346 195 8321</span></p>'
                                      }
                                    }
                                  ]
                                }
                              }
                            ],
                            width: 33.2999999999999971578290569595992565155029296875
                          }
                        },
                        {
                          type: "Column",
                          value: {
                            _styles: ["column"],
                            items: [
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--map"],
                                  items: [
                                    {
                                      type: "Map",
                                      value: {
                                        _styles: ["map"],
                                        height: 350,
                                        mobileHeight: 300,
                                        address: "melbourne"
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--spacer"],
                                  items: [
                                    {
                                      type: "Spacer",
                                      value: {
                                        _styles: ["spacer"],
                                        height: 20
                                      }
                                    }
                                  ],
                                  showOnMobile: "off"
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<h4 class="brz-tp-heading4"><span class="brz-cp-color2">melbourne office</span></h4>'
                                      }
                                    }
                                  ],
                                  marginBottom: 0,
                                  marginBottomSuffix: "px",
                                  margin: 0
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<p class="brz-tp-paragraph"><span class="brz-cp-color3">Mark Black</span></p>'
                                      }
                                    }
                                  ],
                                  marginTop: 0,
                                  marginTopSuffix: "px",
                                  margin: 0
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<p class="brz-tp-paragraph"><span class="brz-cp-color7">#21 Jump Street</span></p><p class="brz-tp-paragraph"><span class="brz-cp-color7">contact@hope-foundation.org</span></p><p class="brz-tp-paragraph"><span class="brz-cp-color7">+1 244 185 8331</span></p>'
                                      }
                                    }
                                  ]
                                }
                              }
                            ],
                            width: 33.2999999999999971578290569595992565155029296875
                          }
                        },
                        {
                          type: "Column",
                          value: {
                            _styles: ["column"],
                            items: [
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--map"],
                                  items: [
                                    {
                                      type: "Map",
                                      value: {
                                        _styles: ["map"],
                                        height: 350,
                                        mobileHeight: 300,
                                        address: "Amsterdam"
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--spacer"],
                                  items: [
                                    {
                                      type: "Spacer",
                                      value: {
                                        _styles: ["spacer"],
                                        height: 20
                                      }
                                    }
                                  ],
                                  showOnMobile: "off"
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<h4 class="brz-tp-heading4"><span class="brz-cp-color2">amsterdam office</span></h4>'
                                      }
                                    }
                                  ],
                                  marginBottom: 0,
                                  marginBottomSuffix: "px",
                                  margin: 0
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<p class="brz-tp-paragraph"><span class="brz-cp-color3">Gene McDonald</span></p>'
                                      }
                                    }
                                  ],
                                  marginTop: 0,
                                  marginTopSuffix: "px",
                                  margin: 0
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<p class="brz-tp-paragraph"><span class="brz-cp-color7">#17 Texier Street</span></p><p class="brz-tp-paragraph"><span class="brz-cp-color7">relations@hope-foundation.org</span></p><p class="brz-tp-paragraph"><span class="brz-cp-color7">+1 346 195 8321</span></p>'
                                      }
                                    }
                                  ]
                                }
                              }
                            ],
                            width: 33.39999999999999857891452847979962825775146484375
                          }
                        }
                      ]
                    }
                  }
                ],
                paddingType: "ungrouped",
                paddingTop: 110,
                paddingBottom: 110,
                padding: 75
              }
            }
          ]
        },
        blockId: "Blank000Light"
      },
      {
        type: "Section",
        blockId: "Blank000Light",
        value: {
          _styles: ["section"],
          items: [
            {
              type: "SectionItem",
              value: {
                _styles: ["section-item"],
                items: [
                  {
                    type: "Row",
                    value: {
                      _styles: ["row", "hide-row-borders", "padding-0"],
                      items: [
                        {
                          type: "Column",
                          value: {
                            _styles: ["column"],
                            items: [
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<h3 class="brz-text-xs-center brz-tp-heading3"><strong class="brz-cp-color2">SHARE</strong></h3>'
                                      }
                                    }
                                  ]
                                }
                              }
                            ],
                            width: 33.2000000000000028421709430404007434844970703125,
                            verticalAlign: "center"
                          }
                        },
                        {
                          type: "Column",
                          value: {
                            _styles: ["column"],
                            items: [
                              {
                                type: "Cloneable",
                                value: {
                                  _styles: [
                                    "wrapper-clone",
                                    "wrapper-clone--button"
                                  ],
                                  items: [
                                    {
                                      type: "Button",
                                      value: {
                                        _styles: ["button"],
                                        text: "FACEBOOK",
                                        iconName: "logo-fb-simple",
                                        iconType: "glyph",
                                        borderRadiusType: "custom",
                                        tempBorderRadiusType: "custom",
                                        paddingRight: 26,
                                        paddingLeft: 26,
                                        fillType: "filled",
                                        borderRadius: 28,
                                        borderWidth: 2,
                                        borderColorOpacity: 0,
                                        borderColorPalette: 0,
                                        bgColorOpacity: 1,
                                        bgColorPalette: "color2",
                                        hoverBgColorOpacity: 1,
                                        hoverBorderColorOpacity: 0,
                                        mobileBorderRadius: 24,
                                        tempBorderWidth: 2,
                                        tempBgColorPalette: "color2",
                                        tempBorderColorPalette: 0,
                                        iconPosition: "left",
                                        size: "small",
                                        mobileSize: "small",
                                        fontSize: 11,
                                        paddingTB: 11,
                                        paddingTop: 11,
                                        paddingBottom: 11,
                                        tempPaddingTB: 11,
                                        tempPaddingTop: 11,
                                        tempPaddingBottom: 11,
                                        paddingRL: 26,
                                        tempPaddingRL: 26,
                                        tempPaddingRight: 26,
                                        tempPaddingLeft: 26,
                                        mobilePaddingTop: 11,
                                        mobilePaddingRight: 26,
                                        mobilePaddingBottom: 11,
                                        mobilePaddingLeft: 26,
                                        tempBorderRadius: 28,
                                        tempMobileBorderRadius: 28,
                                        hoverBgColorHex: "#ff8400",
                                        tempHoverBgColorOpacity: 1,
                                        hoverBgColorPalette: "color3",
                                        tempHoverBgColorPalette: "color3",
                                        hoverBorderColorHex: "#ff8400",
                                        hoverBorderColorPalette: "",
                                        tempHoverBorderColorPalette: "",
                                        linkExternalBlank: "off",
                                        linkExternal: "#"
                                      }
                                    },
                                    {
                                      type: "Button",
                                      value: {
                                        _styles: ["button"],
                                        text: "TWITTER",
                                        iconName: "logo-twitter",
                                        iconType: "glyph",
                                        borderRadiusType: "custom",
                                        tempBorderRadiusType: "custom",
                                        paddingRight: 26,
                                        paddingLeft: 26,
                                        fillType: "filled",
                                        borderRadius: 28,
                                        borderWidth: 2,
                                        borderColorOpacity: 0,
                                        borderColorPalette: 0,
                                        bgColorOpacity: 1,
                                        bgColorPalette: "color2",
                                        hoverBgColorOpacity: 1,
                                        hoverBorderColorOpacity: 0,
                                        mobileBorderRadius: 24,
                                        tempBorderWidth: 2,
                                        tempBgColorPalette: "color2",
                                        tempBorderColorPalette: 0,
                                        iconPosition: "left",
                                        size: "small",
                                        mobileSize: "small",
                                        fontSize: 11,
                                        paddingTB: 11,
                                        paddingTop: 11,
                                        paddingBottom: 11,
                                        tempPaddingTB: 11,
                                        tempPaddingTop: 11,
                                        tempPaddingBottom: 11,
                                        paddingRL: 26,
                                        tempPaddingRL: 26,
                                        tempPaddingRight: 26,
                                        tempPaddingLeft: 26,
                                        mobilePaddingTop: 11,
                                        mobilePaddingRight: 26,
                                        mobilePaddingBottom: 11,
                                        mobilePaddingLeft: 26,
                                        tempBorderRadius: 28,
                                        tempMobileBorderRadius: 28,
                                        hoverBgColorHex: "#ff8400",
                                        tempHoverBgColorOpacity: 1,
                                        hoverBgColorPalette: "color3",
                                        tempHoverBgColorPalette: "color3",
                                        hoverBorderColorHex: "#ff8400",
                                        hoverBorderColorPalette: "",
                                        tempHoverBorderColorPalette: "",
                                        linkExternal: "#",
                                        linkExternalBlank: "off"
                                      }
                                    },
                                    {
                                      type: "Button",
                                      value: {
                                        _styles: ["button"],
                                        text: "INSTAGRAM",
                                        iconName: "logo-instagram",
                                        iconType: "glyph",
                                        borderRadiusType: "custom",
                                        tempBorderRadiusType: "custom",
                                        paddingRight: 26,
                                        paddingLeft: 26,
                                        fillType: "filled",
                                        borderRadius: 28,
                                        borderWidth: 2,
                                        borderColorOpacity: 0,
                                        borderColorPalette: 0,
                                        bgColorOpacity: 1,
                                        bgColorPalette: "color2",
                                        hoverBgColorOpacity: 1,
                                        hoverBorderColorOpacity: 0,
                                        mobileBorderRadius: 24,
                                        tempBorderWidth: 2,
                                        tempBgColorPalette: "color2",
                                        tempBorderColorPalette: 0,
                                        iconPosition: "left",
                                        size: "small",
                                        mobileSize: "small",
                                        fontSize: 11,
                                        paddingTB: 11,
                                        paddingTop: 11,
                                        paddingBottom: 11,
                                        tempPaddingTB: 11,
                                        tempPaddingTop: 11,
                                        tempPaddingBottom: 11,
                                        paddingRL: 26,
                                        tempPaddingRL: 26,
                                        tempPaddingRight: 26,
                                        tempPaddingLeft: 26,
                                        mobilePaddingTop: 11,
                                        mobilePaddingRight: 26,
                                        mobilePaddingBottom: 11,
                                        mobilePaddingLeft: 26,
                                        tempBorderRadius: 28,
                                        tempMobileBorderRadius: 28,
                                        hoverBgColorHex: "#ff8400",
                                        tempHoverBgColorOpacity: 1,
                                        hoverBgColorPalette: "color3",
                                        tempHoverBgColorPalette: "color3",
                                        hoverBorderColorHex: "#ff8400",
                                        hoverBorderColorPalette: "",
                                        tempHoverBorderColorPalette: "",
                                        linkExternal: "#",
                                        linkExternalBlank: "off"
                                      }
                                    },
                                    {
                                      type: "Button",
                                      value: {
                                        _styles: ["button"],
                                        text: "PINTEREST",
                                        iconName: "logo-pinterest",
                                        iconType: "glyph",
                                        borderRadiusType: "custom",
                                        tempBorderRadiusType: "custom",
                                        paddingRight: 26,
                                        paddingLeft: 26,
                                        fillType: "filled",
                                        borderRadius: 28,
                                        borderWidth: 2,
                                        borderColorOpacity: 0,
                                        borderColorPalette: 0,
                                        bgColorOpacity: 1,
                                        bgColorPalette: "color2",
                                        hoverBgColorOpacity: 1,
                                        hoverBorderColorOpacity: 0,
                                        mobileBorderRadius: 24,
                                        tempBorderWidth: 2,
                                        tempBgColorPalette: "color2",
                                        tempBorderColorPalette: 0,
                                        iconPosition: "left",
                                        size: "small",
                                        mobileSize: "small",
                                        fontSize: 11,
                                        paddingTB: 11,
                                        paddingTop: 11,
                                        paddingBottom: 11,
                                        tempPaddingTB: 11,
                                        tempPaddingTop: 11,
                                        tempPaddingBottom: 11,
                                        paddingRL: 26,
                                        tempPaddingRL: 26,
                                        tempPaddingRight: 26,
                                        tempPaddingLeft: 26,
                                        mobilePaddingTop: 11,
                                        mobilePaddingRight: 26,
                                        mobilePaddingBottom: 11,
                                        mobilePaddingLeft: 26,
                                        tempBorderRadius: 28,
                                        tempMobileBorderRadius: 28,
                                        hoverBgColorHex: "#ff8400",
                                        tempHoverBgColorOpacity: 1,
                                        hoverBgColorPalette: "color3",
                                        tempHoverBgColorPalette: "color3",
                                        hoverBorderColorHex: "#ff8400",
                                        hoverBorderColorPalette: "",
                                        tempHoverBorderColorPalette: "",
                                        linkExternal: "#",
                                        linkExternalBlank: "off"
                                      }
                                    }
                                  ],
                                  horizontalAlign: "right",
                                  mobileHorizontalAlign: "center",
                                  itemPadding: 20,
                                  itemPaddingRight: 20,
                                  itemPaddingLeft: 20
                                }
                              }
                            ],
                            width: 66.7999999999999971578290569595992565155029296875,
                            verticalAlign: "center"
                          }
                        }
                      ]
                    }
                  }
                ],
                paddingType: "ungrouped",
                paddingTop: 60,
                paddingBottom: 60,
                padding: 75,
                bgImageWidth: 1920,
                bgImageHeight: 236,
                bgImageSrc: "f82df70ad1d3a0dcd747f1b72a139e55.png",
                bgPositionX: 50,
                bgPositionY: 50,
                bgColorOpacity: 0,
                tempBgColorOpacity: 1,
                tempMobileBgColorOpacity: 1,
                shapeTopType: "none",
                shape: "bottom",
                shapeBottomType: "none"
              }
            }
          ]
        }
      },
      {
        type: "Section",
        blockId: "Blank000Light",
        value: {
          _styles: ["section"],
          items: [
            {
              type: "SectionItem",
              value: {
                _styles: ["section-item"],
                items: [
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--image"],
                      items: [
                        {
                          type: "Image",
                          value: {
                            _styles: ["image"],
                            imageWidth: 762,
                            imageHeight: 648,
                            imageSrc: "771b47652ed2d658577a25d863768967.png",
                            height: 100,
                            positionX: 50,
                            positionY: 50,
                            resize: 32
                          }
                        }
                      ],
                      mobileHorizontalAlign: "center"
                    }
                  },
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--spacer"],
                      items: [
                        {
                          type: "Spacer",
                          value: {
                            _styles: ["spacer"],
                            height: 37,
                            mobileHeight: 100
                          }
                        }
                      ],
                      showOnMobile: "off"
                    }
                  },
                  {
                    type: "Row",
                    value: {
                      _styles: ["row"],
                      items: [
                        {
                          type: "Column",
                          value: {
                            _styles: ["column"],
                            items: [
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--spacer"],
                                  items: [
                                    {
                                      type: "Spacer",
                                      value: {
                                        _styles: ["spacer"],
                                        height: 40
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                type: "Cloneable",
                                value: {
                                  _styles: [
                                    "wrapper-clone",
                                    "wrapper-clone--icon"
                                  ],
                                  items: [
                                    {
                                      type: "Icon",
                                      value: {
                                        _styles: ["icon"],
                                        size: "custom",
                                        customSize: 60,
                                        borderRadius: 0,
                                        name: "wallet-90",
                                        type: "outline",
                                        colorPalette: "color5",
                                        colorOpacity: 1,
                                        hoverColorPalette: "color5",
                                        hoverColorOpacity: 1,
                                        hoverColorHex: "#2ddeb6"
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--spacer"],
                                  items: [
                                    {
                                      type: "Spacer",
                                      value: {
                                        _styles: ["spacer"],
                                        height: 10
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<h4 class="brz-text-xs-center brz-text-lg-center brz-tp-heading4"><strong class="brz-cp-color8">MAKE A DONATION</strong></h4>'
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--spacer"],
                                  items: [
                                    {
                                      type: "Spacer",
                                      value: {
                                        _styles: ["spacer"],
                                        height: 10
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<p class="brz-text-lg-center brz-tp-paragraph brz-text-xs-center"><span class="brz-cp-color7">Nullam in dui mauris. Vivamus he drerit arcu sed erat molestie vehic. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie.</span></p>'
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--spacer"],
                                  items: [
                                    {
                                      type: "Spacer",
                                      value: {
                                        _styles: ["spacer"],
                                        height: 20
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                type: "Cloneable",
                                value: {
                                  _styles: [
                                    "wrapper-clone",
                                    "wrapper-clone--button"
                                  ],
                                  items: [
                                    {
                                      type: "Button",
                                      value: {
                                        _styles: ["button"],
                                        text: "DONATE",
                                        iconName: "",
                                        iconType: "",
                                        borderRadiusType: "custom",
                                        tempBorderRadiusType: "custom",
                                        paddingRight: 26,
                                        paddingLeft: 26,
                                        fillType: "filled",
                                        borderRadius: 28,
                                        borderWidth: 2,
                                        borderColorOpacity: 1,
                                        borderColorPalette: "color3",
                                        bgColorOpacity: 1,
                                        bgColorPalette: "color3",
                                        hoverBgColorOpacity: 1,
                                        hoverBorderColorOpacity: 0.8000000000000000444089209850062616169452667236328125,
                                        mobileBorderRadius: 24,
                                        size: "small",
                                        mobileSize: "small",
                                        fontSize: 11,
                                        paddingTB: 11,
                                        paddingTop: 11,
                                        paddingBottom: 11,
                                        tempPaddingTB: 11,
                                        tempPaddingTop: 11,
                                        tempPaddingBottom: 11,
                                        paddingRL: 26,
                                        tempPaddingRL: 26,
                                        tempPaddingRight: 26,
                                        tempPaddingLeft: 26,
                                        mobilePaddingTop: 11,
                                        mobilePaddingRight: 26,
                                        mobilePaddingBottom: 11,
                                        mobilePaddingLeft: 26,
                                        tempBorderRadius: 28,
                                        tempMobileBorderRadius: 28,
                                        hoverBgColorPalette: "color5",
                                        hoverBorderColorPalette: "color5",
                                        tempHoverBorderColorPalette: "color5",
                                        hoverBgColorHex: "#ffffff",
                                        tempHoverBgColorOpacity: 1,
                                        tempHoverBgColorPalette: "color3",
                                        hoverBorderColorHex: "#ffffff",
                                        hoverColorPalette: "color8",
                                        hoverColorOpacity: 1,
                                        colorPalette: "color8",
                                        colorOpacity: 1,
                                        tempBgColorPalette: "color3",
                                        tempBorderColorPalette: "color3",
                                        linkExternalBlank: "off",
                                        linkExternal:
                                          "https://demo.themefuse.com/hope/?page_id=1956"
                                      }
                                    }
                                  ],
                                  horizontalAlign: "center"
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--spacer"],
                                  items: [
                                    {
                                      type: "Spacer",
                                      value: {
                                        _styles: ["spacer"],
                                        height: 40
                                      }
                                    }
                                  ]
                                }
                              }
                            ],
                            width: 33.2999999999999971578290569595992565155029296875,
                            bgImageWidth: 360,
                            bgImageHeight: 415,
                            bgImageSrc: "7b1adebe35da64a8a588a466f821c80a.png",
                            bgPositionX: 50,
                            bgPositionY: 50,
                            bgColorOpacity: 0,
                            tempBgColorOpacity: 1,
                            mobilePaddingRight: 10,
                            mobilePaddingLeft: 10,
                            marginType: "ungrouped",
                            marginRight: 10,
                            marginRightSuffix: "px",
                            margin: 0,
                            marginLeft: 10,
                            marginLeftSuffix: "px",
                            paddingRight: 45,
                            paddingRightSuffix: "px",
                            padding: 15,
                            paddingLeft: 45,
                            paddingLeftSuffix: "px"
                          }
                        },
                        {
                          type: "Column",
                          value: {
                            _styles: ["column"],
                            items: [
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--spacer"],
                                  items: [
                                    {
                                      type: "Spacer",
                                      value: {
                                        _styles: ["spacer"],
                                        height: 40
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                type: "Cloneable",
                                value: {
                                  _styles: [
                                    "wrapper-clone",
                                    "wrapper-clone--icon"
                                  ],
                                  items: [
                                    {
                                      type: "Icon",
                                      value: {
                                        _styles: ["icon"],
                                        size: "custom",
                                        customSize: 60,
                                        borderRadius: 0,
                                        name: "world",
                                        type: "outline",
                                        colorPalette: "color5",
                                        colorOpacity: 1,
                                        hoverColorPalette: "color5",
                                        hoverColorOpacity: 1,
                                        hoverColorHex: "#2ddeb6"
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--spacer"],
                                  items: [
                                    {
                                      type: "Spacer",
                                      value: {
                                        _styles: ["spacer"],
                                        height: 10
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<h4 class="brz-text-xs-center brz-tp-heading4 brz-text-lg-center"><strong class="brz-cp-color8">BE A VOLUNTEER</strong></h4>'
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--spacer"],
                                  items: [
                                    {
                                      type: "Spacer",
                                      value: {
                                        _styles: ["spacer"],
                                        height: 10
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<p class="brz-tp-paragraph brz-text-lg-center brz-text-xs-center"><span class="brz-cp-color7">Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu.</span></p>'
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--spacer"],
                                  items: [
                                    {
                                      type: "Spacer",
                                      value: {
                                        _styles: ["spacer"],
                                        height: 20
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                type: "Cloneable",
                                value: {
                                  _styles: [
                                    "wrapper-clone",
                                    "wrapper-clone--button"
                                  ],
                                  items: [
                                    {
                                      type: "Button",
                                      value: {
                                        _styles: ["button"],
                                        text: "JOIN US",
                                        iconName: "",
                                        iconType: "",
                                        borderRadiusType: "custom",
                                        tempBorderRadiusType: "custom",
                                        paddingRight: 26,
                                        paddingLeft: 26,
                                        fillType: "filled",
                                        borderRadius: 28,
                                        borderWidth: 2,
                                        borderColorOpacity: 1,
                                        borderColorPalette: "color3",
                                        bgColorOpacity: 1,
                                        bgColorPalette: "color3",
                                        hoverBgColorOpacity: 1,
                                        hoverBorderColorOpacity: 0.8000000000000000444089209850062616169452667236328125,
                                        mobileBorderRadius: 24,
                                        size: "small",
                                        mobileSize: "small",
                                        fontSize: 11,
                                        paddingTB: 11,
                                        paddingTop: 11,
                                        paddingBottom: 11,
                                        tempPaddingTB: 11,
                                        tempPaddingTop: 11,
                                        tempPaddingBottom: 11,
                                        paddingRL: 26,
                                        tempPaddingRL: 26,
                                        tempPaddingRight: 26,
                                        tempPaddingLeft: 26,
                                        mobilePaddingTop: 11,
                                        mobilePaddingRight: 26,
                                        mobilePaddingBottom: 11,
                                        mobilePaddingLeft: 26,
                                        tempBorderRadius: 28,
                                        tempMobileBorderRadius: 28,
                                        hoverBgColorPalette: "color5",
                                        hoverBorderColorPalette: "color5",
                                        tempHoverBorderColorPalette: "color5",
                                        hoverBgColorHex: "#ffffff",
                                        tempHoverBgColorOpacity: 1,
                                        tempHoverBgColorPalette: "color3",
                                        hoverBorderColorHex: "#ffffff",
                                        hoverColorPalette: "color8",
                                        hoverColorOpacity: 1,
                                        colorPalette: "color8",
                                        colorOpacity: 1,
                                        tempBgColorPalette: "color3",
                                        tempBorderColorPalette: "color3",
                                        linkExternalBlank: "off",
                                        linkExternal:
                                          "https://demo.themefuse.com/hope/?page_id=1925"
                                      }
                                    }
                                  ],
                                  horizontalAlign: "center"
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--spacer"],
                                  items: [
                                    {
                                      type: "Spacer",
                                      value: {
                                        _styles: ["spacer"],
                                        height: 40
                                      }
                                    }
                                  ]
                                }
                              }
                            ],
                            width: 33.2999999999999971578290569595992565155029296875,
                            bgImageWidth: 360,
                            bgImageHeight: 415,
                            bgImageSrc: "0ed06726becf14545f9bad82b5be4e6f.png",
                            bgPositionX: 50,
                            bgPositionY: 50,
                            bgColorOpacity: 0,
                            tempBgColorOpacity: 1,
                            mobilePaddingRight: 10,
                            mobilePaddingLeft: 10,
                            marginType: "ungrouped",
                            marginRight: 10,
                            marginRightSuffix: "px",
                            margin: 0,
                            marginLeft: 10,
                            marginLeftSuffix: "px",
                            paddingRight: 45,
                            paddingRightSuffix: "px",
                            padding: 15,
                            paddingLeft: 45,
                            paddingLeftSuffix: "px"
                          }
                        },
                        {
                          type: "Column",
                          value: {
                            _styles: ["column"],
                            items: [
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--spacer"],
                                  items: [
                                    {
                                      type: "Spacer",
                                      value: {
                                        _styles: ["spacer"],
                                        height: 40
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                type: "Cloneable",
                                value: {
                                  _styles: [
                                    "wrapper-clone",
                                    "wrapper-clone--icon"
                                  ],
                                  items: [
                                    {
                                      type: "Icon",
                                      value: {
                                        _styles: ["icon"],
                                        size: "custom",
                                        customSize: 60,
                                        borderRadius: 0,
                                        name: "chat-content",
                                        type: "outline",
                                        colorPalette: "color5",
                                        colorOpacity: 1,
                                        hoverColorPalette: "color5",
                                        hoverColorOpacity: 1,
                                        hoverColorHex: "#2ddeb6"
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--spacer"],
                                  items: [
                                    {
                                      type: "Spacer",
                                      value: {
                                        _styles: ["spacer"],
                                        height: 10
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<h4 class="brz-text-xs-center brz-tp-heading4 brz-text-lg-center"><strong class="brz-cp-color8">SPREAD THE WORD</strong></h4>'
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--spacer"],
                                  items: [
                                    {
                                      type: "Spacer",
                                      value: {
                                        _styles: ["spacer"],
                                        height: 10
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<p class="brz-tp-paragraph brz-text-lg-center brz-text-xs-center"><span class="brz-cp-color7">Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in.</span></p>'
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--spacer"],
                                  items: [
                                    {
                                      type: "Spacer",
                                      value: {
                                        _styles: ["spacer"],
                                        height: 20
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                type: "Cloneable",
                                value: {
                                  _styles: [
                                    "wrapper-clone",
                                    "wrapper-clone--button"
                                  ],
                                  items: [
                                    {
                                      type: "Button",
                                      value: {
                                        _styles: ["button"],
                                        text: "FIND OUT MORE",
                                        iconName: "",
                                        iconType: "",
                                        borderRadiusType: "custom",
                                        tempBorderRadiusType: "custom",
                                        paddingRight: 26,
                                        paddingLeft: 26,
                                        fillType: "filled",
                                        borderRadius: 28,
                                        borderWidth: 2,
                                        borderColorOpacity: 1,
                                        borderColorPalette: "color3",
                                        bgColorOpacity: 1,
                                        bgColorPalette: "color3",
                                        hoverBgColorOpacity: 1,
                                        hoverBorderColorOpacity: 0.8000000000000000444089209850062616169452667236328125,
                                        mobileBorderRadius: 24,
                                        size: "small",
                                        mobileSize: "small",
                                        fontSize: 11,
                                        paddingTB: 11,
                                        paddingTop: 11,
                                        paddingBottom: 11,
                                        tempPaddingTB: 11,
                                        tempPaddingTop: 11,
                                        tempPaddingBottom: 11,
                                        paddingRL: 26,
                                        tempPaddingRL: 26,
                                        tempPaddingRight: 26,
                                        tempPaddingLeft: 26,
                                        mobilePaddingTop: 11,
                                        mobilePaddingRight: 26,
                                        mobilePaddingBottom: 11,
                                        mobilePaddingLeft: 26,
                                        tempBorderRadius: 28,
                                        tempMobileBorderRadius: 28,
                                        hoverBgColorPalette: "color5",
                                        hoverBorderColorPalette: "color5",
                                        tempHoverBorderColorPalette: "color5",
                                        hoverBgColorHex: "#ffffff",
                                        tempHoverBgColorOpacity: 1,
                                        tempHoverBgColorPalette: "color3",
                                        hoverBorderColorHex: "#ffffff",
                                        hoverColorPalette: "color8",
                                        hoverColorOpacity: 1,
                                        colorPalette: "color8",
                                        colorOpacity: 1,
                                        tempBgColorPalette: "color3",
                                        tempBorderColorPalette: "color3",
                                        linkExternalBlank: "off",
                                        linkExternal:
                                          "https://demo.themefuse.com/hope/?page_id=1909"
                                      }
                                    }
                                  ],
                                  horizontalAlign: "center"
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--spacer"],
                                  items: [
                                    {
                                      type: "Spacer",
                                      value: {
                                        _styles: ["spacer"],
                                        height: 40
                                      }
                                    }
                                  ]
                                }
                              }
                            ],
                            width: 33.39999999999999857891452847979962825775146484375,
                            bgImageWidth: 360,
                            bgImageHeight: 415,
                            bgImageSrc: "f62bce2113fced1cdb2a3655ecf24df9.png",
                            bgPositionX: 50,
                            bgPositionY: 50,
                            bgColorOpacity: 0,
                            tempBgColorOpacity: 1,
                            mobilePaddingRight: 10,
                            mobilePaddingLeft: 10,
                            marginType: "ungrouped",
                            marginRight: 10,
                            marginRightSuffix: "px",
                            margin: 0,
                            marginLeft: 10,
                            marginLeftSuffix: "px",
                            paddingRight: 45,
                            paddingRightSuffix: "px",
                            padding: 15,
                            paddingLeft: 45,
                            paddingLeftSuffix: "px"
                          }
                        }
                      ],
                      marginType: "ungrouped",
                      marginBottom: -300,
                      marginBottomSuffix: "px",
                      margin: 0,
                      zIndex: 100
                    }
                  }
                ],
                bgImageWidth: 1920,
                bgImageHeight: 770,
                bgImageSrc: "77b2d02efb822062dbd8db0154faf96e.jpg",
                bgPositionX: 49,
                bgPositionY: 19,
                bgColorOpacity: 0,
                tempBgColorOpacity: 1,
                tempMobileBgColorOpacity: 1,
                paddingType: "ungrouped",
                paddingTop: 123,
                paddingBottom: 15,
                padding: 75,
                bgPopulation: ""
              }
            }
          ]
        }
      },
      {
        type: "Section",
        value: {
          _styles: ["section"],
          items: [
            {
              type: "SectionItem",
              value: {
                _styles: ["section-item"],
                items: [
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--spacer"],
                      items: [
                        {
                          type: "Spacer",
                          value: {
                            _styles: ["spacer"],
                            height: 236
                          }
                        }
                      ]
                    }
                  }
                ],
                bgColorPalette: "color1",
                bgColorHex: "",
                bgColorOpacity: 1
              }
            }
          ]
        },
        blockId: "Blank000Light"
      }
    ]
  }
};