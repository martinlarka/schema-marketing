export default ({ env }) => ({
  upload: {
    config: {
      breakpoints: {
        xxlarge: 1536,
        xlarge: 1440,
        large: 976,
        medium: 768,
        small: 390,
        xsmall: 375,
      },
      provider: env("R2_ACCESS_KEY") && "strapi-provider-cloudflare-r2",
      providerOptions: {
        accessKeyId: env("R2_ACCESS_KEY"),
        secretAccessKey: env("R2_SECRET_KEY"),
        endpoint: `https://${env("R2_ACCOUNT_ID")}.r2.cloudflarestorage.com`,
        params: {
          Bucket: env("R2_BUCKET_NAME"),
          s3ForcePathStyle: true,
        },
        cloudflarePublicAccessUrl: env("R2_BUCKET_PUBLIC_URL"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  "strapi-plugin-sso": {
    enabled: Boolean(env("OIDC_CLIENT_ID")),
    config: {
      // Either sets token to session storage if false or local storage if true
      REMEMBER_ME: false,

      // OpenID Connect
      OIDC_REDIRECT_URI: env("OIDC_REDIRECT_URI"),
      OIDC_CLIENT_ID: env("OIDC_CLIENT_ID"),
      OIDC_CLIENT_SECRET: env("OIDC_CLIENT_SECRET"),

      OIDC_SCOPES: "openid profile email",
      // API Endpoints required for OIDC
      OIDC_AUTHORIZATION_ENDPOINT: env("OIDC_AUTHORIZATION_ENDPOINT"),
      OIDC_TOKEN_ENDPOINT: env("OIDC_TOKEN_ENDPOINT"),
      OIDC_USER_INFO_ENDPOINT: env("OIDC_USER_INFO_ENDPOINT"),
      OIDC_USER_INFO_ENDPOINT_WITH_AUTH_HEADER: false,
      OIDC_GRANT_TYPE: "authorization_code",
      // customizable username arguments
      OIDC_FAMILY_NAME_FIELD: "family_name",
      OIDC_GIVEN_NAME_FIELD: "given_name",
    },
  },
  seo: {
    enabled: true,
  },
  graphql: {
    config: {
      defaultLimit: 100,
    },
  },
  "webp-converter": {
    enabled: true,
    config: {
      mimeTypes: undefined,
      options: {},
    },
  },
});
