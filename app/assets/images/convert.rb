Dir['*.jpg', '*.png'].each do |img|
  filename = File.basename(img, '.*')
  command = "convert #{img} -resize '460>' #{filename}-thumbnail.png"
  p(command)
  `#{command}`
end
