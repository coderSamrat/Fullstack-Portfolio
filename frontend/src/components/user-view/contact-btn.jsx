import React from 'react';
import { Button } from '../ui/button';
import { Mail } from 'lucide-react';

const ContactMeBtn = ({
      handleNavigateToContact
}) => {
      return (
            <Button
                  onClick={handleNavigateToContact}
                  variant="outline"
                  size="lg"
                  className="hover:bg-primary/60 text-muted-foreground hover:text-white transition-colors duration-300 ease-out"
            >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Me
            </Button>
      );
}

export default ContactMeBtn;
