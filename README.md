# View GitHub JWT Token

This action takes an optional input for the `aud` value and outputs a GitHub signed JWT. 

## Inputs

## `aud`

The audiance field in the JWT

Default: ``

## Outputs

## `jwt`

The JSON Web Token signed by GitHub Actions

## Example usage

uses:Sawthis/expose-jwt-action@v0.1.3
with:
  aud: 'sts.amazonaws.com'