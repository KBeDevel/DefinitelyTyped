declare module 'bcp47' {
    interface Extension {
        singleton: string
        extension: string[]
    }

    interface Language {
        /**
         * Shortest ISO 639 code sometimes followed by extended language
         * sub-tags or reserved for future use or registered language sub-tag.
         */
        language: string

        /**
         * Selected ISO 639 codes permanently reserved.
         */
        extlang: string[]
    }

    interface LanguageTag {
        language: Language

        /**
         * ISO 3166-1 code.
         */
        region: string | null

        /**
         * ISO 15924 code.
         */
        script: string | null

        /**
         * Registered variants.
         */
        variant: string[]

        /**
         * Extensions.
         */
        extension: Extension[]

        /**
         * Single alphanumerics "x" reserved for private use.
         */
        privateuse: string[]
    }

    interface AvailableInfo {
        langtag: LanguageTag
        privateuse: string[]
    }

    /**
     * Parses the language tag and returns an object with all the available
     * information. If the tag is not valid it returns null. Look at the
     * [examples](https://github.com/gagle/node-bcp47/tree/master/examples)
     * to see what information returns.
     */
    export function parse(languageRange: string): AvailableInfo | null
}
