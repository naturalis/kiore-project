#!/usr/bin/perl
use strict;
use warnings;
use Getopt::Long;
use Text::CSV 'csv';

# process command line arguments
my $infile;   # ratsSNPS_Structure_input_CLEAN
my $metadata; # Genotyping-007.010-01_SNP_Raw_data.tsv
GetOptions(
  'infile=s'   => \$infile,
  'metadata=s' => \$metadata,
);

# read metadata as CSV
my $aoh = csv( 'in' => $metadata, 'headers' => 'auto', 'sep_char' => "\t" );

# start reading infile
open my $in, '<', $infile or die $!;
LINE: while(<$in>) {
  
  # input data has 3 tab-separated fields
  my @line = split /\t/, $_;
  
  # skip header, which omits the first column
  next LINE unless $line[0];
  
  # the input file has alleles space-separated in the 3rd (=last) field
  my @alleles = split /\s/, $line[-1];
  
  # get the metadata record for the current sample
  my ($meta) = grep { $_->{'sample_id'} eq $line[0] } @{ $aoh };
  my @meta = map { $meta->{$_} } qw[sample_id registration_number populatie geo_lat geo_long field_number];
  
  # print output
  print join("\t", @meta, @alleles), "\n";
}