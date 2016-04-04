
a = 'This is some sample text'

a.each do |s|
    s.gsub!('This is some sample text', 'replacement')
end

