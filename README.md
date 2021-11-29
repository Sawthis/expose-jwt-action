# View GitHub JWT Token

This action takes an optional input for the `aud` value and outputs a GitHub signed JWT. 

## Inputs

## `aud`

The audiance field in the JWT

Default: `FOO.BAR`

## Outputs

## `jwt`

The JSON Web Token signed by GitHub Actions

## Example usage

uses: magic7s/expose-jwt-action@main
with:
  aud: 'sts.amazonaws.com'