import { createShipment } from '../src/node'

import chalk from 'chalk'

async function run() {
  try {
    console.log(chalk.yellow('Sending a demo shipment request to Mondial Relay...'))
    const response = await createShipment({
      context: {
        CustomerId: 'BDTEST',
        Password: 'fill me',
        Login: 'fill me',
      },
      shipment: {
        OrderNo: '120120',

        CustomerNo: '120120',

        ParcelCount: '1',

        DeliveryInstruction: 'Hello world',

        CollectionMode: {
          Mode: 'CCC',
        },

        DeliveryMode: {
          Mode: '24R',
          Location: 'FR-000484',
        },

        Sender: {
          Firstname: 'Tesnim',
          Lastname: '',
          Streetname: 'Quai Frédéric Mistral',
          HouseNo: '3',
          CountryCode: 'FR',
          PostCode: '69003',
          City: 'Saint Quentin Fallavier',
          PhoneNo: '',
          MobileNo: '+33646781454',
          Email: 'john.sender@example.com',
        },

        Recipient: {
          Title: 'Mme',
          Firstname: 'Maria',
          Lastname: 'Receiver',
          Streetname: 'Quai Frédéric Mistral',
          HouseNo: '2',
          CountryCode: 'FR',
          PostCode: '69003',
          City: 'Lyon',
          PhoneNo: '',
          MobileNo: '+33646781454',
          Email: 'maria.reciever@example.com',
        },

        Parcels: {
          Parcel: {
            Content: 'Des bigoudis de tailles variables',
            Weight: {
              Unit: 'gr',
              Value: 2000,
            },
          },
        },
      },
    })

    console.log(chalk.green('Sent successfully.'))
    console.log(response)
  } catch (e) {
    console.error(chalk.red(e))
  }
}

run()
