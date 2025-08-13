// src/app/layout.tsx
import '@once-ui-system/core/css/styles.css';
import '@once-ui-system/core/css/tokens.css';
import '@/resources/custom.css';
import React from "react";
import { Column, Flex, Background, Meta, Providers, SpacingToken, opacity } from "@once-ui-system/core";
import { Footer, Header, RouteGuard } from '@/components';
import { baseURL, home, effects, fonts, style, dataStyle } from '@/resources';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex suppressHydrationWarning as="html" lang="en" fillWidth className={`${fonts.heading.variable} ${fonts.body.variable}`}>
      <Meta.generate title={home.title} description={home.description} baseURL={baseURL} path={home.path} image={home.image} />
      <Providers>
        <Column as="body" background="page" fillWidth style={{ minHeight: "100vh" }} margin="0" padding="0" horizontal="center">
          <Background
            position="fixed"
            mask={effects.mask}
            gradient={effects.gradient}
            dots={effects.dots}
            grid={effects.grid}
            lines={effects.lines}
          />
          <Header />
          <Flex zIndex={0} fillWidth padding="l" horizontal="center" flex={1}>
            <RouteGuard>{children}</RouteGuard>
          </Flex>
          <Footer />
        </Column>
      </Providers>
    </Flex>
  );
}
