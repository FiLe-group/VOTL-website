// Chakra Imports
import {Flex, Icon, Tag, Text} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useActiveSidebarItem } from '@/utils/router';
import { IoHome } from 'react-icons/io5';
import { FaChevronRight as ChevronRightIcon } from 'react-icons/fa';
import { navbarBreakpoint } from '@/theme/breakpoints';
import { common } from '@/config/translations/common';
import {SkeletonText} from "@/components/ui/skeleton";
import {BreadcrumbLink, BreadcrumbRoot} from "@/components/ui/breadcrumb";

export function DefaultNavbar() {
  const activeItem = useActiveSidebarItem();
  const breadcrumb = [
    {
      icon: (<IoHome />) as ReactNode,
      text: (<common.T text="pages" />) as ReactNode,
      href: '/user/home',
    },
  ];

  if (activeItem != null)
    breadcrumb.push({
      icon: activeItem.icon,
      text: <>{activeItem.name}</>,
      href: activeItem.path,
    });

  return (
    <Flex
      direction="column"
      gap={{
        base: 2,
        [navbarBreakpoint]: 3,
      }}
      mt={{
        base: '8px',
        [navbarBreakpoint]: '0',
      }}
    >
      <BreadcrumbRoot
        fontSize="sm"
        separator={
          <Icon
            verticalAlign="middle"
            as={ChevronRightIcon}
            color="blue.100"
          />
        }
      >
        {breadcrumb.map((item, i) => (
          <BreadcrumbLink key={i}>
            <Tag.Root
              asChild
              gap={1}
              rounded="full"
              color="blue.100"
              bg="blue.500.2"
            >
              <link href={item.href}>
                {item.icon}
                <Tag.Label>{item.text}</Tag.Label>
              </link>
            </Tag.Root>
          </BreadcrumbLink >
        ))}
      </BreadcrumbRoot>
      <Text color="textPrimary" fontWeight="bold" fontSize='2xl' mb={2}>
        {activeItem?.name || <SkeletonText w="full" noOfLines={2} />}
      </Text>
    </Flex>
  );
}
