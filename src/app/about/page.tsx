// src/app/about/page.tsx
import React from "react";
import { Column, Flex, Heading, Text, Avatar, Tag, Meta, Schema } from "@once-ui-system/core";
import { about, person, social, baseURL } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [...about.intro.items], // fix readonly error
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map(e => e.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map(i => i.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map(s => s.title),
    }
  ];

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {about.tableOfContent.display && (
        <Column left="0" style={{ top: "50%", transform: "translateY(-50%)" }} position="fixed" paddingLeft="24" gap="32" hide="s">
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}

      <Flex fillWidth mobileDirection="column" horizontal="center">
        {about.avatar.display && (
          <Column minWidth="160" paddingX="l" paddingBottom="xl" gap="m" flex={3} horizontal="center">
            <Avatar src={person.avatar} size="xl" />
            <Flex gap="8" vertical="center">{person.location}</Flex>
            <Flex wrap gap="8">
              {person.languages.map(lang => <Tag key={lang}>{lang}</Tag>)}
            </Flex>
          </Column>
        )}

        <Column flex={9} maxWidth={40}>
          <Heading variant="display-strong-xl">{person.name}</Heading>
          <Text variant="display-default-xs" onBackground="neutral-weak">{person.role}</Text>
        </Column>
      </Flex>
    </Column>
  );
}
