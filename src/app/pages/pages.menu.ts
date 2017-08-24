export const PAGES_MENU = [
  {
    path: 'admin',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'ໜ້າຫຼັກ',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'user',
        data: {
          menu: {
            title: 'ຜູ້ໃຊ້',
            icon: 'ion-person',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'user-home',
            data: {
              menu: {
                title: 'ຈັດການຜູ້ໃຊ້',
                icon: 'ion-person',
              }
            }
          },
          {
            path: 'user-add',
            data: {
              menu: {
                title: 'ເພີ່ມຜູ້ໃຊ້',
                icon: 'ion-person-add',
              }
            }
          },
          {
            path: 'user-block',
            data: {
              menu: {
                title: 'ກຳນົດການເຂົ້າເຖິງ',
                icon: 'ion-ios-personadd-outline',
              }
            }
          }
        ]
      },
      {
        path: 'restaurant',
        data: {
          menu: {
            title: 'ຮ້ານອາຫານ',
            icon: 'ion-beer',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'restaurant-home',
            data: {
              menu: {
                title: 'ຈັດການຮ້ານອາຫານ',
              }
            }
          },
          {
            path: 'restaurant-add',
            data: {
              menu: {
                title: 'ເພີ່ມຮ້ານອາຫານ',
              }
            }
          },
          {
            path: 'restaurant-type',
            data: {
              menu: {
                title: 'ປະເພດຮ້ານອາຫານ',
              }
            }
          }
        ]
      },
      {
        path: 'event',
        data: {
          menu: {
            title: 'ອິເວັນ',
            icon: 'fa fa-flask',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'event-home',
            data: {
              menu: {
                title: 'ຈັດການອີເວັນ',
              }
            }
          },
          {
            path: 'event-add',
            data: {
              menu: {
                title: 'ເພີ່ມອີເວັນ',
              }
            }
          },
          {
            path: 'event-type',
            data: {
              menu: {
                title: 'ປະເພດອີເວັນ',
              }
            }
          }
        ]
      },
      {
        path: 'coupon',
        data: {
          menu: {
            title: 'coupon',
            icon: 'ion-ribbon-b',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'coupon-home',
            data: {
              menu: {
                title: 'ຈັດການ coupon',
              }
            }
          },
          {
            path: 'coupon-add',
            data: {
              menu: {
                title: 'ເພີ່ມ coupon',
              }
            }
          },
          {
            path: 'coupon-type',
            data: {
              menu: {
                title: 'ປະເພດ coupon',
              }
            }
          }
        ]
      },
      {
        path: 'menu',
        data: {
          menu: {
            title: 'ເມນູ',
            icon: 'fa fa-yelp',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'order',
        data: {
          menu: {
            title: 'ລາຍການສັ່ງອາຫານ',
            icon: 'fa fa-cutlery',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'review',
        data: {
          menu: {
            title: 'ລິວີວຮ້ານ',
            icon: 'fa fa-cutlery',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'notification',
        data: {
          menu: {
            title: 'ແຈ້ງເຕືອນ',
            icon: 'fa fa-cutlery',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'type',
        data: {
          menu: {
            title: 'ຈັດການປະເພດ',
            icon: 'fa fa-list',
            selected: false,
            expanded: false,
            order: 0
          }
        },
        children: [
          {
            path: 'type-all',
            data: {
              menu: {
                title: 'ປະເພດທັງໝົດ',
              }
            }
          },
          {
            path: 'type-restaurant',
            data: {
              menu: {
                title: 'ປະເພດຮ້ານ',
                icon: 'fa fa-cutlery',
              }
            },
            children: [
              {
                path: 'type-restaurant-home',
                data: {
                  menu: {
                    title: 'ຈັດການປະເພດ',
                    icon: 'fa fa-search',
                  }
                }
              },
              {
                path: 'type-restaurant-add',
                data: {
                  menu: {
                    title: 'ເພີ່ມປະເພດ',
                    icon: 'fa fa-plus-square',
                  }
                }
              }
            ]
          },
          {
            path: 'type-menu',
            data: {
              menu: {
                title: 'ປະເພດເມນູ',
              }
            }
          }
        ]
      },
      /* {
        path: 'components',
        data: {
          menu: {
            title: 'ຮ້ານອາຫານ',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'charts',
            data: {
              menu: {
                title: 'ຈັດການຮ້ານອາຫານ',
              }
            }
          },
          {
            path: 'charts',
            data: {
              menu: {
                title: 'ເພີ່ມຮ້ານອາຫານ',
              }
            }
          },
          {
            path: 'charts',
            data: {
              menu: {
                title: 'ປະເພດຮ້ານອາຫານ',
              }
            }
          }
        ]
      },
      {
        path: 'charts',
        data: {
          menu: {
            title: 'ຈັດການອີເວັນ',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'chartist-js',
            data: {
              menu: {
                title: 'general.menu.chartist_js',
              }
            }
          }
        ]
      },
      {
        path: 'ui',
        data: {
          menu: {
            title: 'ເມນູ',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          {
            path: 'typography',
            data: {
              menu: {
                title: 'general.menu.typography',
              }
            }
          },
          {
            path: 'buttons',
            data: {
              menu: {
                title: 'ລາຍການສັ່ງອາຫານ',
              }
            }
          },
          {
            path: 'icons',
            data: {
              menu: {
                title: 'general.menu.icons',
              }
            }
          },
          {
            path: 'modals',
            data: {
              menu: {
                title: 'ຄູປອງ',
              }
            }
          },
          {
            path: 'slim',
            data: {
              menu: {
                title: 'Slim loading bar',
              }
            }
          },
          {
            path: 'grid',
            data: {
              menu: {
                title: 'ລີວິວ',
              }
            }
          },
        ]
      },
      {
        path: 'forms',
        data: {
          menu: {
            title: 'ເລດຮ້ານ',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
                title: 'general.menu.form_inputs',
              }
            }
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: 'general.menu.form_layouts',
              }
            }
          }
        ]
      },
      {
        path: 'tables',
        data: {
          menu: {
            title: 'ຈັດການລາຍຈ່າຍ',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'basictables',
            data: {
              menu: {
                title: 'general.menu.basic_tables',
              }
            }
          },
          {
            path: 'smarttables',
            data: {
              menu: {
                title: 'general.menu.smart_tables',
              }
            }
          },
          {
            path: 'datatables',
            data: {
              menu: {
                title: 'Data Tables',
              }
            }
          },
          {
            path: 'hottables',
            data: {
              menu: {
                title: 'Hot Tables',
              }
            }
          }
        ]
      },
      {
        path: 'maps',
        data: {
          menu: {
            title: 'general.menu.maps',
            icon: 'ion-ios-location-outline',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [
          {
            path: 'googlemaps',
            data: {
              menu: {
                title: 'general.menu.google_maps',
              }
            }
          },
          {
            path: 'leafletmaps',
            data: {
              menu: {
                title: 'general.menu.leaflet_maps',
              }
            }
          },
          {
            path: 'bubblemaps',
            data: {
              menu: {
                title: 'general.menu.bubble_maps',
              }
            }
          },
          {
            path: 'linemaps',
            data: {
              menu: {
                title: 'general.menu.line_maps',
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.pages',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'general.menu.login'
              }
            }
          },
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'general.menu.register'
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.menu_level_1',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'general.menu.menu_level_1_1',
                url: '#'
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: 'general.menu.menu_level_1_2',
                url: '#'
              }
            },
            children: [
              {
                path: '',
                data: {
                  menu: {
                    title: 'general.menu.menu_level_1_2_1',
                    url: '#'
                  }
                }
              }
            ]
          }
        ]
      },
      {
        path: 'new',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'ໜ້າໃໝ່', // menu title
            icon: 'ion-android-home', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0
          }
        }
      }, */
      /* {
        path: '',
        data: {
          menu: {
            title: 'general.menu.external_link',
            url: 'http://akveo.com',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank'
          }
        }
      } */
    ]
  }
];
