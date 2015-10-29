module Panier
  extend ActiveSupport::Concern

    included do
      before_filter :str_to_json
    end

    def str_to_json
      fst_arr = params[:panier].split("},")
      snd_arr = fst_arr.map { |x| x.gsub(/[\[{\]}]/, "") }
      trd_arr = snd_arr.map { |x| x.split(",") }
      @panier = []

      trd_arr.each do |e|
        my_hash = {}
        e.each do |f|
          key_value = f.split(":", 2)
          my_hash[key_value[0].gsub("\"", "").to_sym] = key_value[1].gsub("\"", "")
        end
        @panier << my_hash
      end

      return @panier
    end

end