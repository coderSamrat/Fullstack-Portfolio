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

export const adminHeroFormIndex = [
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
            name: 'title',
            label: 'Title',
            type: 'text',
            placeholder: 'Your Titles',
            componentType: 'input',
            validation: {
                  required: true,
            }
      },
      {
            name: 'description',
            label: 'Description',
            type: 'text',
            placeholder: 'A short description about you',
            componentType: 'textarea',
            rows: 5,
            validation: {
                  required: true,
            }
      },
      {
            name: 'resumeLink',
            label: 'Resume Link',
            type: 'text',
            placeholder: 'Link to your resume',
            componentType: 'input',
            validation: {
                  required: false,
            }
      },
      {
            name: 'profileImage',
            label: 'Profile Image',
            type: 'file',
            placeholder: 'Add your profile image',
            componentType: 'input',
            validation: {
                  required: false,
            }
      }
];