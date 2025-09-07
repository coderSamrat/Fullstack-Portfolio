export const contactFormIndex = [
      {
            name: 'name',
            label: 'Name',
            type: 'text',
            placeholder: 'Your Name',
            componentType: 'input',
            validation: {
                  required: true,
            }
      },
      {
            name: 'email',
            label: 'Email',
            type: 'email',
            placeholder: 'Your Email',
            componentType: 'input',
            validation: {
                  required: true,
                  email: true,
            }
      },
      {
            name: 'mobile',
            label: 'Mobile',
            type: 'number',
            placeholder: 'Your Mobile Number',
            componentType: 'input',
            validation: {
                  required: true,
            }
      },
      {
            name: 'message',
            label: 'Message',
            placeholder: 'Your Message',
            componentType: 'textarea',
            rows: 5,
            validation: {
                  required: true,
            }
      }
];