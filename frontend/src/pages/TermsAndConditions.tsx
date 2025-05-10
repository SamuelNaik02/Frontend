import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="mb-4 inline-flex items-center text-sm text-primary hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="mb-4 text-3xl font-bold">Terms and Conditions</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 rounded-xl bg-background p-6 shadow-lg">
          {/* Introduction */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>
            <p className="text-muted-foreground">
              Welcome to JnanaSetu. By accessing and using our platform, you agree to be bound by these Terms and Conditions. 
              These terms govern your use of our website, services, and any related applications.
            </p>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">2. User Responsibilities</h2>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>Provide accurate and complete information during registration</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Use the platform in compliance with all applicable laws</li>
              <li>Report any security breaches or unauthorized access</li>
              <li>Not engage in any activity that disrupts or interferes with the service</li>
            </ul>
          </section>

          {/* Account and Security */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">3. Account and Security</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                You are responsible for maintaining the security of your account and for all activities that occur under your account.
                We recommend:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>Using strong, unique passwords</li>
                <li>Enabling two-factor authentication when available</li>
                <li>Regularly updating your security settings</li>
                <li>Not sharing your account credentials with others</li>
              </ul>
            </div>
          </section>

          {/* Usage Restrictions */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">4. Usage Restrictions</h2>
            <p className="mb-4 text-muted-foreground">
              You agree not to:
            </p>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>Use the service for any illegal purposes</li>
              <li>Attempt to gain unauthorized access to any part of the service</li>
              <li>Use automated systems or software to extract data</li>
              <li>Share or distribute content that violates intellectual property rights</li>
              <li>Engage in any activity that could harm or disrupt the service</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">5. Intellectual Property</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                All content, features, and functionality of our platform are owned by JnanaSetu and are protected by international 
                copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content 
                without our prior written consent.
              </p>
            </div>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">6. Third-Party Services</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Our platform may integrate with or link to third-party services. These services are not under our control, and 
                we are not responsible for their content, privacy policies, or practices.
              </p>
              <p>
                We recommend reviewing the terms and privacy policies of any third-party services you access through our platform.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">7. Limitation of Liability</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                To the maximum extent permitted by law, JnanaSetu shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages resulting from your use of or inability to use the service.
              </p>
              <p>
                Our total liability for any claims related to the service shall not exceed the amount you paid us in the past 
                twelve months.
              </p>
            </div>
          </section>

          {/* Privacy Policy */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">8. Privacy Policy</h2>
            <p className="text-muted-foreground">
              Your use of our platform is also governed by our Privacy Policy. Please review our{' '}
              <Link to="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>{' '}
              to understand how we collect, use, and protect your personal information.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">9. Changes to Terms</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any material changes through 
                the platform or via email.
              </p>
              <p>
                Your continued use of the service after such modifications constitutes your acceptance of the updated terms.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">10. Contact Information</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="rounded-lg bg-muted p-4">
                <p>Email: support@jnanasetu.com</p>
                <p>Address: [Your Company Address]</p>
                <p>Phone: [Your Contact Number]</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions; 