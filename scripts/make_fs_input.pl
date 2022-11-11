#!/usr/bin/perl
use strict;
use warnings;

my %map = (
  '-9' => 'N',
  '1'  => 'A',
  '2'  => 'T',
  '3'  => 'G',
  '4'  => 'C',
);

LINE: while(<>) {
  my @line = split /\t/, $_;
  next LINE unless $line[0];
  my @fields = map { $map{$_} } split /\s/, $line[-1];
  print $line[0], "\t", 'pop' . $line[1], "\t", join("\t", @fields), "\n";
}