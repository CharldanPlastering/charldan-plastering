// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Footer documents */
interface FooterDocumentData {
    /**
     * Copyright Business Name field in *Footer*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: footer.copyright_business_name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    copyright_business_name: prismicT.KeyTextField;
}
/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<FooterDocumentData>, "footer", Lang>;
/** Content for Header documents */
interface HeaderDocumentData {
    /**
     * Logo field in *Header*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: header.logo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
    /**
     * Phone Number field in *Header*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: header.phone_number
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    phone_number: prismicT.KeyTextField;
    /**
     * Navigation field in *Header*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: header.navigation[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    navigation: prismicT.GroupField<Simplify<HeaderDocumentDataNavigationItem>>;
}
/**
 * Item in Header → Navigation
 *
 */
export interface HeaderDocumentDataNavigationItem {
    /**
     * Link Text field in *Header → Navigation*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: header.navigation[].link_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    link_text: prismicT.KeyTextField;
    /**
     * Link Destination field in *Header → Navigation*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: header.navigation[].link_destination
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    link_destination: prismicT.KeyTextField;
}
/**
 * Header document from Prismic
 *
 * - **API ID**: `header`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeaderDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HeaderDocumentData>, "header", Lang>;
/** Content for Homepage documents */
interface HomepageDocumentData {
    /**
     * Title field in *Homepage*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.title
     * - **Tab**: Hero
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Strapline field in *Homepage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.strapline
     * - **Tab**: Hero
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    strapline: prismicT.RichTextField;
    /**
     * Button Text field in *Homepage*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.button_text
     * - **Tab**: Hero
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    button_text: prismicT.KeyTextField;
    /**
     * Button Destination field in *Homepage*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.button_destination
     * - **Tab**: Hero
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    button_destination: prismicT.KeyTextField;
    /**
     * Background Image field in *Homepage*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.hero_image
     * - **Tab**: Hero
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    hero_image: prismicT.ImageField<never>;
    /**
     * Services field in *Homepage*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.services[]
     * - **Tab**: Services
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    services: prismicT.GroupField<Simplify<HomepageDocumentDataServicesItem>>;
    /**
     * Heading field in *Homepage*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.about_heading
     * - **Tab**: About
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    about_heading: prismicT.TitleField;
    /**
     * Text field in *Homepage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.about_text
     * - **Tab**: About
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    about_text: prismicT.RichTextField;
    /**
     * Qualities field in *Homepage*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.qualities[]
     * - **Tab**: About
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    qualities: prismicT.GroupField<Simplify<HomepageDocumentDataQualitiesItem>>;
    /**
     * Background Image field in *Homepage*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.about_image
     * - **Tab**: About
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    about_image: prismicT.ImageField<never>;
    /**
     * Heading field in *Homepage*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.gallery_heading
     * - **Tab**: Gallery
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    gallery_heading: prismicT.TitleField;
    /**
     * Description field in *Homepage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.gallery_description
     * - **Tab**: Gallery
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    gallery_description: prismicT.RichTextField;
    /**
     * Gallery field in *Homepage*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.gallery[]
     * - **Tab**: Gallery
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    gallery: prismicT.GroupField<Simplify<HomepageDocumentDataGalleryItem>>;
    /**
     * Heading field in *Homepage*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.testimonials_heading
     * - **Tab**: Testimonials
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    testimonials_heading: prismicT.TitleField;
    /**
     * Description field in *Homepage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.testimonials_description
     * - **Tab**: Testimonials
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    testimonials_description: prismicT.RichTextField;
    /**
     * Testimonials field in *Homepage*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.testimonials[]
     * - **Tab**: Testimonials
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    testimonials: prismicT.GroupField<Simplify<HomepageDocumentDataTestimonialsItem>>;
    /**
     * Heading field in *Homepage*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.contact_heading
     * - **Tab**: Contact
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    contact_heading: prismicT.TitleField;
    /**
     * Description field in *Homepage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.contact_description
     * - **Tab**: Contact
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    contact_description: prismicT.RichTextField;
    /**
     * Phone Number field in *Homepage*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.phone_number
     * - **Tab**: Contact
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    phone_number: prismicT.KeyTextField;
    /**
     * email field in *Homepage*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.email
     * - **Tab**: Contact
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    email: prismicT.KeyTextField;
    /**
     * Address field in *Homepage*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.address[]
     * - **Tab**: Contact
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    address: prismicT.GroupField<Simplify<HomepageDocumentDataAddressItem>>;
    /**
     * Social Media Heading field in *Homepage*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.social_media_heading
     * - **Tab**: Contact
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    social_media_heading: prismicT.TitleField;
    /**
     * Social Media Links field in *Homepage*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.social_media_links[]
     * - **Tab**: Contact
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    social_media_links: prismicT.GroupField<Simplify<HomepageDocumentDataSocialMediaLinksItem>>;
    /**
     * Background Image field in *Homepage*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.contact_image
     * - **Tab**: Contact
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    contact_image: prismicT.ImageField<never>;
    /**
     * Meta Title field in *Homepage*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.meta_title
     * - **Tab**: Metadata
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_title: prismicT.KeyTextField;
    /**
     * Meta Description field in *Homepage*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.meta_description
     * - **Tab**: Metadata
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_description: prismicT.KeyTextField;
}
/**
 * Item in Homepage → Services
 *
 */
export interface HomepageDocumentDataServicesItem {
    /**
     * Name field in *Homepage → Services*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.services[].name
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.TitleField;
    /**
     * Description field in *Homepage → Services*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.services[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item in Homepage → Qualities
 *
 */
export interface HomepageDocumentDataQualitiesItem {
    /**
     * Heading field in *Homepage → Qualities*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.qualities[].heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    heading: prismicT.TitleField;
    /**
     * Description field in *Homepage → Qualities*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.qualities[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
    /**
     * Icon field in *Homepage → Qualities*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.qualities[].icon
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    icon: prismicT.ImageField<never>;
}
/**
 * Item in Homepage → Gallery
 *
 */
export interface HomepageDocumentDataGalleryItem {
    /**
     * Image field in *Homepage → Gallery*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.gallery[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Item in Homepage → Testimonials
 *
 */
export interface HomepageDocumentDataTestimonialsItem {
    /**
     * Star Rating field in *Homepage → Testimonials*
     *
     * - **Field Type**: Number
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.testimonials[].star_rating
     * - **Documentation**: https://prismic.io/docs/core-concepts/number
     *
     */
    star_rating: prismicT.NumberField;
    /**
     * Comment field in *Homepage → Testimonials*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.testimonials[].comment
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    comment: prismicT.RichTextField;
    /**
     * Customer Name field in *Homepage → Testimonials*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.testimonials[].customer_name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    customer_name: prismicT.KeyTextField;
    /**
     * Additional Info field in *Homepage → Testimonials*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.testimonials[].additional_info
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    additional_info: prismicT.KeyTextField;
}
/**
 * Item in Homepage → Address
 *
 */
export interface HomepageDocumentDataAddressItem {
    /**
     * Address Line field in *Homepage → Address*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.address[].address_line
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    address_line: prismicT.KeyTextField;
}
/**
 * Item in Homepage → Social Media Links
 *
 */
export interface HomepageDocumentDataSocialMediaLinksItem {
    /**
     * Link field in *Homepage → Social Media Links*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.social_media_links[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
    /**
     * Icon field in *Homepage → Social Media Links*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.social_media_links[].icon
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    icon: prismicT.ImageField<never>;
}
/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomepageDocumentData>, "homepage", Lang>;
/** Content for Privacy Policy documents */
interface PrivacyPolicyDocumentData {
    /**
     * Title field in *Privacy Policy*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: privacy_policy.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Privacy Policy field in *Privacy Policy*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: privacy_policy.privacy_policy
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    privacy_policy: prismicT.RichTextField;
}
/**
 * Privacy Policy document from Prismic
 *
 * - **API ID**: `privacy_policy`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PrivacyPolicyDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<PrivacyPolicyDocumentData>, "privacy_policy", Lang>;
export type AllDocumentTypes = FooterDocument | HeaderDocument | HomepageDocument | PrivacyPolicyDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { FooterDocumentData, FooterDocument, HeaderDocumentData, HeaderDocumentDataNavigationItem, HeaderDocument, HomepageDocumentData, HomepageDocumentDataServicesItem, HomepageDocumentDataQualitiesItem, HomepageDocumentDataGalleryItem, HomepageDocumentDataTestimonialsItem, HomepageDocumentDataAddressItem, HomepageDocumentDataSocialMediaLinksItem, HomepageDocument, PrivacyPolicyDocumentData, PrivacyPolicyDocument, AllDocumentTypes };
    }
}
