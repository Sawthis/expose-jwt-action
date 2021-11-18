# View GitHub JWT Token

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

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